const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const git  = require('../src/Round');
const expect = chai.expect;

describe('Deck', function() {

    beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);
    }) 

    it('should be a function', function() {
      
      expect(Deck).to.be.a('function');
    });

    it('should return the current card being played', function() {
        round.returnCurrentCard()

        expect(Deck).to.be.a('function');
      });

        round.returnCurrentCard()

    it('should be able to update turn count regardless of if the guess is correct or incorrect', function() {
      
      expect(Deck).to.be.a('function');
    });

    it('should have next card become current card', function() {
      
        // expect(Deck).to.be.a('function');
    });

    it('should evaluate and record a guess. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses', function() {
      
        // expect(Deck).to.be.a('function');
    });

    it('should have feedback returned regarding whether the guess is incorrect or correct', function() {
      
        // expect(Deck).to.be.a('function');
    });

    it('should have a method that calculates and returns the percentage of correct guesses', function() {
      
        // expect(Deck).to.be.a('function');
    }); 

    it('should have a method that prints that the round has ended', function() {
        // ‘** Round over! ** You answered <>% of the questions correctly!’
        // expect(Deck).to.be.a('function');
    });    
})