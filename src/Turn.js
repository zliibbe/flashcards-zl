const card = require('./Card');

class Turn {
    constructor(usersGuess, cardObject) {
        this.guess = usersGuess;
        this.currentCard = cardObject;
        this.correctGuess = null;
    } 

    returnCard() {
        return this.currentCard;
    }

    evaluateGuess() {
        if (this.guess != this.currentCard.correctAnswer) {
            this.correctGuess = false;
        }
        
        if (this.guess === this.currentCard.correctAnswer) {
            this.correctGuess = true;
        }
    }

    giveFeedback() {
        if (this.correctGuess === false) {
            return 'incorrect!'
        }

        if (this.correctGuess === true) {
            return 'correct!'
        }
    }
}

module.exports = Turn;