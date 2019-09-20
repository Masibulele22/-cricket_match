let assert = require('assert');
let CricketScoreKeeper = require('../cricket_match');

describe('CricketScoreKeeper', function(){

    it('should show the number of overs left.', function(){
        var cricketScoreKeeper = CricketScoreKeeper(10);

        cricketScoreKeeper.oversLeft("----1-");

        assert.equal(9, cricketScoreKeeper.oversLeft());
    });

    it('should show the current score.', function(){
        var cricketScoreKeeper3 = CricketScoreKeeper();
        assert.equal(cricketScoreKeeper3.scoreCounter('-----1'), 1);
    });

    it('should show the score.', function(){
        var cricketScoreKeeper2 = CricketScoreKeeper();

        cricketScoreKeeper2.getScore("11--11");

        assert.equal(cricketScoreKeeper2.getScore('4'), 4);
    });

    it('should show the number of decremented overs', function(){

        var doneOvers = CricketScoreKeeper();

        doneOvers.oversLeft("-----w");

        assert.equal(doneOvers.oversLeft("-----w"), 7);
    });

    it('should show the number of wickets taken', function(){

        var fallenWickets = CricketScoreKeeper();

        fallenWickets.wicketsFallen("-----w");

        assert.equal(fallenWickets.wicketsFallen("-----w"), 9);
    });
    
    it('should show the number of wickets taken 2', function(){

        var fallenWickets2 = CricketScoreKeeper();

        fallenWickets2.wicketsFallen("--w--w");

        assert.equal(fallenWickets2.wicketsFallen("--w--w"), 9);
    });

});