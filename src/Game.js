const data = require('./data');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
      this.currentRound = {};
  }

  start() {
    //creates cards
    //const map1 = array1.map(x => x * 2)
    const cards = prototypeQuestions.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer));
    // put cards into deck
    const deck = new Deck(cards)
    // creates a new Round using deck
    this.currentRound = new Round(deck);
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;