let log = console.log;
let doc = document;

// blinking semi colon animatio

setInterval(() => {
  doc.querySelector(`#bot-blink`).style.cssText = `visibility: hidden`;
  doc.querySelector(`#player-blink`).style.cssText = `visibility: hidden`;
}, 500);
setInterval(() => {
  doc.querySelector(`#bot-blink`).style.cssText = `visibility: visible`;
  doc.querySelector(`#player-blink`).style.cssText = `visibility: visible`;
}, 1000);

/////////////////// ========> I - Creating the Cards <======== //////////////////////////

// const COLORS = ["blue", "red", "green"];
// const VALUES = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "69"];

// class Deck {
//   constructor(cards = newDeck()) {
//     this.cards = cards;
//   }
// }

// class Card {
//   constructor(color, value) {
//     this.color = color;
//     this.value = value;
//   }
// }

// function newDeck() {
//   return COLORS.flatMap((color) => {
//     return VALUES.map((value) => {
//       return new Card(color, value);
//     });
//   });
// }

// log(Deck.cards);

class Deck {
  constructor() {
    // values 1-9 here?
  }
}

// Do we need these? Literally the only thing that will change is the color. We can use the array for that
class Blue extends Deck {
  constructor() {

  }
}

class Red extends Deck {
  constructor() {

  }
}

class Green extends Deck {
  constructor() {

  }
}