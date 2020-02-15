var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = []


var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice);
 
function reset(){
    guessesLeft = 10;
    guessesSoFar = [];
}

document.onkeyup = function(event) {
    var userGuess = event.key;
   

    if(userGuess === computerChoice){
        wins++;
        document.getElementById("wins").innerHTML = wins;
        alert("you win!")
        guessesSoFar.push(userGuess);
        reset();
        
    }

    else(userGuess !== computerChoice)
        guessesLeft--;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        console.log(userGuess);
    
    
    }
    if( guessesLeft === 0){
        losses++;
        document.getElementById("header").innerHTML = "Please try again"
        reset()

    }


