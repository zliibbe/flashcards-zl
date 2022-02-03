const chai = require('chai');
const Deck = require('../src/Deck');
const Card = require('../src/Card')
const expect = chai.expect;

describe('Deck', function() {
    
    beforeEach(() => {
        card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

        deck1 = new Deck([card1, card2, card3])
    }) 

    it('should be a function', function() {
      
      expect(Deck).to.be.a('function');
    });

    it('should be an instance of Deck', function() {
        
        expect(deck1).to.be.an.instanceof(Deck);
    }); 

    it('should be an array of Card objects', function() {
                
        expect(deck1.arrayOfCards).to.deep.equal([card1, card2, card3])
    })

    it('should be able to know how many cards are in a Deck', function() {
        deck1.countCards();

        expect(deck1.countCards()).to.equal(3);
    })    
})