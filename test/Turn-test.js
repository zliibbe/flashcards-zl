const chai = require('chai');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const expect = chai.expect;

describe('Turn', function() {
    beforeEach(() => {
        card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        turn = new Turn('sea otter', card);
    }) 
    it('should be a function', function() {
      
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function() {
        
        expect(turn).to.be.an.instanceof(Turn);
    }); 

    it('should be able to instatiate with a string that represents a guess', function() {

        expect(turn.guess).to.deep.equal('sea otter');
    });

    it('should be able to instantiate with a string that represents any user\'s guess', function() {
     
        expect(turn.guess).to.deep.equal('sea otter');
    });

    it('should be able to instantiate with a Card object', function() {
    
        expect(turn.currentCard).to.deep.equal(card);
    });

    it('should be able to return a card', function() {
        let returnedCardObject = turn.currentCard;

        let currentCardObject = turn.returnCard()

        expect(returnedCardObject).to.equal(currentCardObject);
    });

    it('should be able to evaluate an incorrect guess', function() {
        turn = new Turn('pug', card);

        turn.evaluateGuess();
        
        expect(turn.correctGuess).to.be.false;
    });

    it('should be able to evaluate a correct guess', function() {

        turn.evaluateGuess()

        expect(turn.correctGuess).to.be.true;
    });

    it('should be able to give feedback regarding a guess', function() {
        turn = new Turn('pug', card);

        turn.evaluateGuess();
        turn.giveFeedback();

        expect(turn.giveFeedback()).to.equal('incorrect!');
    });

    it('should be able to give feedback regarding a guess', function() {
        turn.evaluateGuess();
        turn.giveFeedback();


        expect(turn.giveFeedback()).to.equal('correct!');
    });
})