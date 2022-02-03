class Deck {
    constructor(arrayOfCards) {
        this.arrayOfCards = arrayOfCards;
        
    }

    countCards() {
        return this.arrayOfCards.length;
    }
}


module.exports = Deck;