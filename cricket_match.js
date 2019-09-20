module.exports = CricketScoreKeeper;

function CricketScoreKeeper() {
    var score = 0;
    var wickets = 10;
    let over = 8;

    function scoreCounter(overString) {

        var overBalls = overString.split('');

        for (var i = 0; i < overBalls.length; i++) {

            var eachBall = overBalls[i];

            if (eachBall == 1) {
                score += 1;
            }
            else if (eachBall == 2) {
                score += 2;
            }
            else if (eachBall == 3) {
                score += 3;
            }
            else if (eachBall == 4) {
                score += 4;
            }
            else if (eachBall == 6) {
                score += 6;
            }
            else {
                score += 0;
            }

        };
        return score;
    };

    function oversLeft(overString) {
        var overStringSplit2 = overString.split('');
        for (i = 0; i < overStringSplit2.length; i++) {
            var stringLengthLine = overStringSplit2[i];        
        }
        if (stringLengthLine.length == 6) {
            return over--
        }
    };

    function wicketsFallen(overString) {

        var overStringSplit = overString.split('');
        for (var i = 0; i < overStringSplit.length; i++) {

            var wicketDectector = overStringSplit[i];
            if (wicketDectector = "w") {
                return wickets--
            };
        }
        return wicketDectector;
    };

    function getScore() {
        return score
    };

    return {
        scoreCounter,
        oversLeft,
        wicketsFallen,
        getScore
    };
};