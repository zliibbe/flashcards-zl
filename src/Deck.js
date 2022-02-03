class Deck {
    constructor(arrayOfCards) {
        this.deck = arrayOfCards;
    }

    countCards() {
        return this.arrayOfCards.length;
    }
}


module.exports = Deck;