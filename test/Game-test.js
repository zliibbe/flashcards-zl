const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const expect = chai.expect;

describe('Game', function() {
    beforeEach(() => {
        game = new Game();
        
    })
    it('should be a function', function() {
      
        expect().to.be.a('function');
    });