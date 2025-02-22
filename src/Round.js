const Deck = require('../src/Deck');
const Turn = require('./Turn');

class Round {
    constructor(deck) {
        this.deck = deck;
        this.currentCard = this.deck.deck[0];
        this.turnCounter = 0;
        this.incorrectGuesses = []
    }
    
    returnCurrentCard()  {
        return this.currentCard;
    }
    
    takeTurn(strGuess){
        let turn = new Turn(strGuess, this.currentCard)
        
        turn.evaluateGuess();
      
        if (turn.correctGuess === false) { 
            this.incorrectGuesses.push(strGuess);
        }
                       
        this.turnCounter++;
        this.currentCard = this.deck.deck[this.turnCounter];        
        return turn.giveFeedback()
    }  

    calculatePercentCorrect() {
        return (this.incorrectGuesses.length / this.turnCounter) * 100
    }

    endRound(){
        let percentageCorrect = this.calculatePercentCorrect()
        console.log(`** Round over! ** You answered ${percentageCorrect}% of the questions correctly!`)
        return `** Round over! ** You answered ${percentageCorrect}% of the questions correctly!`
    }
}


module.exports = Round; 