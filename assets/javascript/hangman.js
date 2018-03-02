var tries = 0;
var wins = 0;
var answer = "";
var guesses = 0;
var word = "elephant";

maxTries = word.length;

var varFields = {
    "hmWins" : wins,
    "hmAnswer" : answer,
    "hmGuessesLeft" : function() {
        return maxTries-tries
    },
    "hmLettersGuessed" : wins,
}

for (var element in varFields) {
    console.log("ELEMENT " + element);
    var x = document.getElementById(element);
    // x.style.display = none;
    console.log("ELEMENT " + x);
}

document.onkeypress = function(event) {
    if (!wins) {
        console.log("game is starting");
    }

}
