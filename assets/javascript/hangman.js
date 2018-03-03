$(document).ready(function () {
    var tries;
    var wins;
    var answer;
    var guesses;
    var lettersGuessed;
    var myWord;
    var reset;
    var arrLtrsGuessed;

    var wordBank = [
        'power',
        'thing',
        'piano',
        'queen',
        'chest',
        'month',
        'death',
        'hotel',
        'blood',
        'drama',
        'honey',
        'event',
        'tooth',
        'studio',
        'recipe',
        'advice',
        'aspect',
        'office',
        'cousin',
        'cancer',
        'speech',
        'device',
        'tennis',
        'extent',
        'camera',
        'leader',
        'speaker',
        'revenue',
        'teacher',
        'arrival',
        'student',
        'thought',
        'context',
        'session',
        'outcome',
        'science',
        'problem',
        'bedroom',
        'library',
        'article',
        'housing',
        'alcohol',
        'surgery',
        'judgment',
        'shopping',
        'currency',
        'employer',
        'security',
        'director',
        'property',
        'relation',
        'election',
        'database',
        'internet',
        'instance',
        'audience',
        'category',
        'weakness',
        'medicine',
        'platform',
        'agreement',
        'promotion',
        'chocolate',
        'operation',
        'direction',
        'apartment',
        'tradition',
        'employment',
        'television',
        'technology',
        'assumption',
        'obligation',
        'connection',
        'percentage',
        'difficulty',
        'protection',
        'appointment',
        'measurement',
        'requirement',
        'negotiation',
        'advertising',
        'information',
        'temperature',
        'combination',
        'environment',
        'distribution',
        'organization',
        'significance',
    ]
    ;
    function initGame() {
        tries = 0;
        wins = 0;
        answer = "";
        guesses = 0;    
        lettersGuessed = "";
        myWord = wordBank[Math.floor((Math.random() * wordBank.length) + 0)];
        reset = 0;
        arrLtrsGuessed = [];
        for (var i =1; i<=myWord.length; i++) {
            answer += "_";
        }
        
        maxTries = myWord.length * 3;
    }
    function blink_text(selector) {
        $(selector).fadeOut(500);
        $(selector).fadeIn(500);
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

    $('#hmLabelWins',
    '#hmLabelAnswer',
    '#hmLabelGuessesLeft',
    '#hmLabelLettersGuessed',
    ).show();

    function labelsDisplay(toggle) {
        if (toggle) {
            $('#hmLabelWins',
            '#hmLabelAnswer',
            '#hmLabelGuessesLeft',
            '#hmLabelLettersGuessed',
            ).show();
        } else {
            $('#hmLabelWins',
            '#hmLabelAnswer',
            '#hmLabelGuessesLeft',
            '#hmLabelLettersGuessed',
            ).hide();
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
        labelsDisplay(false);

        document.onkeypress = function(event) {
            if (!reset) {
                initGame();
                $('#startMsg').css('color','black');
                showValues();
                labelsDisplay(true);
                reset++;
            } else {
                if (1) { // Check for matched characters and update answer
                    // Clear the message area
                    $('#startMsg').css('color','black');

                    var key = event.key.toLowerCase();
                    // make sure an alphabetic key was pressed
                    if (   (event.keyCode >= 65 && event.keyCode <= 90)
                        || (event.keyCode >= 97 && event.keyCode <= 122)
                        ) {

                        // bump tries
                        tries++;
                        $('#hmGuessesLeft').text(maxTries - tries);

                        // record the letter guessed
                        if (arrLtrsGuessed.indexOf(key) == -1) {
                            arrLtrsGuessed.push(key);
                            $('#hmLettersGuessed').text(arrLtrsGuessed.join(""));
                        }

                        var arrAnswer = answer.split("");
                        console.log("ANSWER ARRAY " + arrAnswer);
                        for (var i = 0; i < myWord.length; i++) {
                            if (myWord[i] == key) {
                                arrAnswer[i]=key;
                            }
                        }
                        answer = arrAnswer.join("");
                        $('#hmAnswer').text(answer);
                    } else {
                        $('#startMsg').text('ALPHABETIC KEYS ONLY');
                        $('#startMsg').css('color','red');
                    }
                }
                console.log("tries " + tries);
                if (1) { // Check win lose
                    if (answer == myWord) { // Did user guess the word?
                        $('#startMsg').text("YOU WIN !!!!");
                        $('#startMsg').css('color','white');
                        setInterval(blink_text('#startMsg'), 1000);
                        reset = 0;
                    } else if (tries==maxTries) { // Is users out of tries?
                        $('#startMsg').text("YOU LOST!!!   The word was " + myWord);
                        $('#startMsg').css('color','red');
                        setInterval(blink_text('#startMsg'), 1000);
                        reset = 0;
                    }

                }
            }
        }
    }
})