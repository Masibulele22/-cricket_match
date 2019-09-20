module.exports = CricketScoreKeeper;

function CricketScoreKeeper() {
    var score = 0;

    function scoreCounter() {
        if (run == "-") {
            return score+= 0;
        }
        else if (run == "1") {
            return score+= 1;
        }
        else if (run == "2") {
            return score+= 2;
        }
        else if (run == "3") {
            return score+= 3;
        }
        else if (run == "4") {
            return score+= 4;
        }
        else if (run == "5") {
            return score+= 5;
        }
        else if (run == "6") {
            return score+= 6;
        }
        else if (run == "W" || "w") {
            return score+= 0;
        }
        else {
            return score+= 0;
        }
    };

    function getScore(){
        return score
    };

    return {
        scoreCounter,
        getScore
    };
};