var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedSoFar = [];


var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice);
 
function reset(){
    guessesLeft = 10;
    guessedSoFar = [];
}

document.onkeyup = function(event) {
    var userGuess = event.key;
    guessedSoFar.push(userGuess);
   

    if(userGuess === computerChoice){
        wins++;
        guessesLeft = 10;
        guessedSoFar = []
        
        alert("you win")
        reset()
    }

    else(userGuess !== computerChoice)
        guessesLeft--;
        console.log(userGuess);
    
    
    }
    if( guessesLeft === 0){
        losses++;
        guessesLeft = 10;
        guessedSoFar = []

        alert("sorry, try again!");
        reset()

    }

    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById("guessedSoFar").innerHTML = "guessed So Far: " + guessedSoFar;




