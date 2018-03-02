var tries = 0;
var wins = 0;
var answer = "";
var guesses = 0;
var myWord = "elephant";

for (var i =1; i<=myWord.length; i++) {
    answer += "_";
}

maxTries = myWord.length;

var varFields = {
    "hmLabelWins" : null,
    "hmWins" : wins,
    "hmAnswer" : answer,
    "hmLabelGuessesLeft" : null,
    "hmGuessesLeft" : function() {
        return this.maxTries-this.tries
    },
    "hmLabelWins" : null,
    "hmLabelLettersGuessed" : null,
    "hmLettersGuessed" : null,
}


function peekaboo(color) {
    for (var element in varFields) {
        // console.log("ELEMENT " + element);
        var x = document.getElementById(element);
        x.style.color = color;
        // console.log("ELEMENT " + x);
    }
}

function showValues() {
    for (var element in varFields) {
        
        console.log("ELEMENT " + element + " --> " + varFields.element);
        if (varFields.element != null) {
            var x = document.getElementById(element);
            x.textContent = varFields.element;
            console.log("ELEMENT " + x);
        }

    }
}





window.onload = function() {
    peekaboo('black');

    document.onkeypress = function(event) {
        if (!tries) {
            console.log("game is starting");
        }

    showValues();
    peekaboo('white');
    }
}
