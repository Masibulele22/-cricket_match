let assert = require('assert');
let CricketScoreKeeper = require('../cricket_match');

describe('CricketScoreKeeper', function(){

    it('should show and count the current score', function(){

        var numberOfRuns = CricketScoreKeeper();
        numberOfRuns.getScore("1");
        numberOfRuns.getScore("1");
        numberOfRuns.getScore("1");
        numberOfRuns.getScore("1");
        numberOfRuns.getScore("1");
        numberOfRuns.getScore("1");

        assert.equal(6, numberOfRuns(6));
    });

});