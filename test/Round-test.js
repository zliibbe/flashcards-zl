const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const expect = chai.expect;

describe('Round', function() {
    let card1;
    let card2;
    let deck;
    let round;
    let turn;
    beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);
    //turn = new Turn('sea otter', card1)
    }) 

    it('should be a function', function() {
      
      expect(round).to.be.a('instance');
    });

    it.skip('should take in an array of cards as a deck to be played with', function() {
        expect(round.deck).to.eql(deck);
    })

    it.skip('should return the current card being played', function() {
        round.returnCurrentCard()

        expect(round.returnCurrentCard()).to.equal('card1');
      });

    it.skip('should be able to update turn count regardless of whether the guess is correct or incorrect', function() {
        round.takeTurn();
        round.takeTurn();
        round.takeTurn();

        expect(round.turnCounter).to.equal(3);
    });

    it.skip('should have next card become current card', function() {
        round.takeTurn();

        expect(round.currentCard).to.equal(card2)//it should have the next index in the deck array become the current card
    });

    it.skip('should evaluate and record a guess.', function() {
        
        expect(round.takeTurn()).to.equal('correct!');
    });

    it.skip('should have incorrect guesses stored (via the id) in an array of incorrectGuesses', function() {
        // push incorrect guess to this.incorrectGuesses array
        round.takeTurn()

        expect(round.incorrectGuesses().length).to.equal(1);

    })

    it.skip('should have feedback returned if the guess is incorrect', function() {
        round.takeTurn()

        // expect(Deck).to.be.a('function');
    });

    it.skip('should have feedback returned if the guess is correct', function() {
      
        // expect(Deck).to.be.a('function');
    });

    it.skip('should have a method that calculates and returns the percentage of correct guesses', function() {
      
        //round.calculatePercentCorrect()
        // expect(Deck).to.be.a('function');
    }); 

    it.skip('should have a method that prints that the round has ended', function() {
        // ‘** Round over! ** You answered <>% of the questions correctly!’
        // expect(Deck).to.be.a('function');
        expect(endRound()).to.equal('** Round over! ** You answered <>% of the questions correctly!')
    });    
})