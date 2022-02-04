const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');
const expect = chai.expect;

describe('Game', function() {
    beforeEach(() => {
        game = new Game();   
    })

    it('should be a function', function() {
      expect(Game).to.be.a('function');
    });
    
    it('should keep track of the current round', function() {
        expect(game.currentRound).to.eql({});
    });
    
    it('should put cards into a deck', function() {
        expect(new Deck()).to.be.an.instanceof(Deck);
    });
})