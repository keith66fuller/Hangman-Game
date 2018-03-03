$(document).ready(function () {
    var tries;
    var wins;
    var answer;
    var guesses;
    var lettersGuessed;
    var myWord;
    var reset;



    function initGame() {
        tries = 0;
        wins = 0;
        answer = "";
        guesses = 0;    
        lettersGuessed = "";
        myWord = "elephant";
        reset = 0;
        for (var i =1; i<=myWord.length; i++) {
            answer += "_";
        }
        
        maxTries = myWord.length * 3;
    }


    initGame();


    var varFields = {
        "hmLabelWins" : null,
        "hmWins" : wins,
        "hmLabelAnswer" : null,
        "hmAnswer" : answer,
        "hmLabelGuessesLeft" : null,
        "hmGuessesLeft" : maxTries,
        "hmLabelLettersGuessed" : null,
        "hmLettersGuessed" : lettersGuessed,
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
            // console.log("ELEMENT " + element + " --> " + varFields[element]);
            if (varFields[element] != null) {
                document.getElementById(element).innerText = varFields[element];
            }
            // console.log("NEW ELEMENT " + typeof(varFields[element]));
        }
    }





    window.onload = function() {
        peekaboo('black');

        document.onkeypress = function(event) {
            if (!reset) {
                console.log("game is starting");
                showValues();
                peekaboo('white');
                var x = document.getElementById("startMsg");
                x.style.color = 'black';
                reset++;
            } else {
                if (1) { // Check for matched characters and update answer
                    // Clear the message area
                    var x = document.getElementById("startMsg");
                    x.style.color = 'black'
                    var key = event.key;
                    // make sure an alphabetic key was pressed
                    if (   (event.keyCode >= 65 && event.keyCode <= 90)
                        || (event.keyCode >= 97 && event.keyCode <= 122)
                        ) {
                        tries++;

                        document.getElementById("hmGuessesLeft").innerText = maxTries - tries;
                        var arrAnswer = answer.split("");
                        console.log("ANSWER ARRAY " + arrAnswer);
                        for (var i = 0; i < myWord.length; i++) {
                            if (myWord[i] == key.toLowerCase()) {
                                arrAnswer[i]=key.toLowerCase();
                            }
                        }
                        answer = arrAnswer.join("");
                        var x = document.getElementById('hmAnswer');
                        x.innerText = answer;
                    } else {
                        var x = document.getElementById("startMsg");
                        x.innerText = "ONLY ALPHABETIC KEYS ARE VALID !!!!";
                        x.style.color = 'red';
                    }
                }

                if (1) { // Did user guess the word !!!
                    if (answer == myWord) {
                        var x = document.getElementById("startMsg");
                        x.innerText = "YOU WIN !!!!";
                        x.style.color = 'white';
                        initGame();
                    }
                }
            }
        }
    }
})