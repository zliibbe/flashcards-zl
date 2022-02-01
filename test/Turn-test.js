const chai = require('chai');
const Turn = require('../src/Turn');
const expect = chai.expect;

describe('Turn', function() {

    it('should be a function', function() {
      const turn = new Turn();
      expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
    }); 

    it('should be able to instatiate with a string that represents a guess', function() {
        const turn = new Turn('object');

        expect(turn.guess).to.deep.equal('object');
    });

    it('should be able to instatiate with a string that represents any user\'s guess', function() {
        const turn = new Turn(usersGuess);

        expect(turn.guess).to.deep.equal(usersGuess);
    });

    it.skip('should be able to instatiate with a Card object', function() {
        const turn = new Turn(usersGuess, cardObject);

        expect(turn.currentCard).to.deep.equal(cardObject);
    });

    it.skip('should be able to return a card', function() {
        const turn = new Turn(usersGuess, cardObject);

        expect(turn.returnCard).to.equal(cardObject);
    });

    it.skip('should be able to evaluate a guess', function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('pug', card);

        expect(turn.evaluateGuess).to.be.false;
    });

    it.skip('should be able to evaluate a guess', function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('sea otter', card);

        expect(turn.evaluateGuess).to.be.true;
    });

    it.skip('should be able to give feedback regarding a guess', function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('pug', card);

        expect(turn.giveFeedback).to.equal('incorrect!');
    });

    it.skip('should be able to give feedback regarding a guess', function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('sea otter', card);

        expect(turn.giveFeedback).to.equal('correct!');
    });
})