var tries=8;
var word="elephant";
var blanks = "";
var key;

for (var i = 0 ; i <= word.length ; i++) {
    blanks += "_";
}





alert("Press any key to begin.");


    alert("Your word is " + blanks.length + " letters long.");
    alert("Here is your word -- > " + blanks)

    while (tries != 0) {


        console.log("You have " + tries + " tries left.  Press a letter key to guess the next letter!");

        document.onkeypress = function(event){
            alert("You pressed " + event.key + ".");
        };
        tries --;    

        
    };
