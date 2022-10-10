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

// log(Deck);

let deck = [
  {color: "blue", value: 1},
  {color: "blue", value: 2},
  {color: "blue", value: 3},
  {color: "blue", value: 4},
  {color: "blue", value: 5},
  {color: "blue", value: 6},
  {color: "blue", value: 7},
  {color: "blue", value: 8},
  {color: "blue", value: 9},
  {color: "red", value: 1},
  {color: "red", value: 2},
  {color: "red", value: 3},
  {color: "red", value: 4},
  {color: "red", value: 5},
  {color: "red", value: 6},
  {color: "red", value: 7},
  {color: "red", value: 8},
  {color: "red", value: 9},
  {color: "green", value: 1},
  {color: "green", value: 2},
  {color: "green", value: 3},
  {color: "green", value: 4},
  {color: "green", value: 5},
  {color: "green", value: 6},
  {color: "green", value: 7},
  {color: "green", value: 8},
  {color: "green", value: 9}
];

const testBotButton = document.getElementById("test-bot-button");
const testPlayerButton = document.getElementById("test-player-button");

class Card {
  constructor({color, value} = cardType) {
    this.color = color;
    this.value = value;
  }
  setVisual() {
    playingCard.style.backgroundColor = this.color;
    playingCard.innerHTML = this.value;
  }
}

let playerHand = [];
let botHand = [];

function addToPlayerHand() {
  let random = Math.floor(Math.random() * deck.length);
  playerHand.push(new Card(deck[random]));
  deck.splice(random, 1);
  log("playerHand", playerHand);
}

function addToBotHand() {
  let random = Math.floor(Math.random() * deck.length);
  botHand.push(new Card(deck[random]));
  deck.splice(random, 1);
  log("botHand", botHand);
}

testPlayerButton.onclick = addToPlayerHand;
testBotButton.onclick = addToBotHand;