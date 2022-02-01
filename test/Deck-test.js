const chai = require('chai');
const Deck = require('../src/Deck');
const expect = chai.expect;

describe('Deck', function() {

    it('should be a function', function() {
      const turn = new Deck();
      expect(Deck).to.be.a('function');
    });

    it('should be an instance of Deck', function() {
        const deck = new Deck();
        expect(deck).to.be.an.instanceof(Deck);
    }); 

    it('should be an array of Card objects', function() {
        const deck = new Deck();

        expect(deck).to.be.equal()
    })

    it('should be an instance of Deck', function() {
        const deck = new Deck();
        expect(deck).to.be.an.instanceof(Deck);
    }); 

    it('should be able to know how many cards are in a Deck', function() {
        const deck = new Deck();

        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

        const deck = new Deck([card1, card2, card3]);

        deck.countCards();
        expect(deck.countCards).should.have.lengthOf(3);
    })
    
}