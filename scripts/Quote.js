export default class Quote {
  constructor(el) {
    this._quotes = [
      {
        quote:
          "Computer language design is just like a stroll in the park. Jurassic Park, that is.",
        author: "Larry Wall",
        source: "https://www.wisesayings.com/javascript-quotes/",
      },
      {
        quote: "Javascript is the duct tape of the Internet.",
        author: "Charlie Campbell",
        source: "https://www.wisesayings.com/javascript-quotes/",
      },
      {
        quote:
          "Any app that can be written in JavaScript, will eventually be written in JavaScript.",
        author: "Jeff Atwood",
        source: "https://www.wisesayings.com/javascript-quotes/",
      },
      {
        quote:
          "The secret to building large apps is never build large apps. Break your applications into small pieces. Then, assemble those testable, bite-sized pieces into your big application.",
        author: "Justin Meyer",
        source: "https://www.wisesayings.com/javascript-quotes/",
      },
      {
        quote:
          "The strength of JavaScript is that you can do anything. The weakness is that you will.",
        author: "Reg Braithwaite",
        source: "https://www.wisesayings.com/javascript-quotes/",
      },
      {
        quote: "Java is to JavaScript as ham is to hamster.",
        author: "Jeremy Keith",
        source: "https://www.goodreads.com/quotes/tag/javascript",
      },
      {
        quote:
          "JavaScript’s global scope is like a public toilet. You can’t avoid going in there, but try to limit your contact with surfaces when you do.",
        author: "Dmitry Baranovskiy",
        source: "https://www.goodreads.com/quotes/tag/javascript",
      },
      {
        quote:
          "Fortunately, JavaScript has some extraordinarily good parts. In JavaScript, there is a beautiful, elegant, highly expressive language that is buried under a steaming pile of good intentions and blunders.",
        author: "Douglas Crockford",
        source:
          "https://www.goodreads.com/work/quotes/3028639-javascript-the-good-parts",
      },
      {
        quote:
          "Here are the falsy values: false null undefined, the empty string '', the number 0 and NaN. All other values are truthy, including true, the string 'false', and all objects.",
        author: "Douglas Crockford",
        source:
          "https://www.goodreads.com/work/quotes/3028639-javascript-the-good-parts",
      },
      {
        quote:
          "In JavaScript, there is a beautiful, elegant, highly expressive language that is buried under a steaming pile of good intentions and blunders.",
        author: "Douglas Crockford",
        source: "https://www.inspiringquotes.us/topic/5130-javascript",
      },
    ];

    this._el = el;
    this._btn = this._el.querySelector("button");
    this._template = this._el.querySelector("[data-js-quote-template]");
    this._target = this._el.querySelector("[data-js-quote]");

    this.init();
  }

  init = () => {
    //generer un nb pour chaque quote
    this.generateNb();
    this._btn.addEventListener("click", () => {
      //creer le template avec nouvelle citation
      this.createTemplate();
      //afficher citation
      this.renderTemplate();
    });
  };

  generateNb = () => {
    for (let i = 0; i < this._quotes.length; i++) {
      this._quotes[i].nb = i + 1;
    }
  };

  createTemplate = () => {
    let rand = Math.floor(Math.random() * this._quotes.length),
      elClone = this._template.cloneNode(true),
      selectedQuote,
      previousNb;

    //Assurez-vous que l’index tiré soit toujours différent de l’index précédent.
    do {
      rand = Math.floor(Math.random() * this._quotes.length);
    } while (rand == this.previousNb);

    selectedQuote = this._quotes[rand];

    for (let prop in selectedQuote) {
      let regExp = new RegExp("{{" + prop + "}}", "g");
      elClone.innerHTML = elClone.innerHTML.replace(
        regExp,
        selectedQuote[prop]
      );
    }
    this.newTemplate = elClone.content;
    previousNb = rand;
  };

  renderTemplate = () => {
    let newQuote = document.importNode(this.newTemplate, true);
    this._target.appendChild(newQuote);

    if (this._target.firstElementChild.nextElementSibling) {
      this._target.firstElementChild.remove();
      this.toggleHidden();
    } else {
      this.toggleHidden();
    }
  };
  //rendre quote invisible si visible et vise-versa
  toggleHidden = () => {
    setTimeout(() => {
      this._target.firstElementChild.classList.toggle("hidden");
    }, 50);
  };
}
