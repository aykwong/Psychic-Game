var wins = 0;
var losses = 0;
var numberofTries = 0;
var guessesMade = 0;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var computerLetter = alphabet[Math.floor(Math.random()*alphabet.length)];

document.onkeyup = function(event) {
    
    var userGuess = event.key;

    if(userGuess === computerLetter) {
        numberofTries++;
        wins++;
        prompt("Congratulations! You guessed the letter, " + computerLetter + "." + " It took you " + numberofTries + " tries.");
    } else if(userGuess === guessesMade) {
        prompt("You made that guess already.");
    } else {
        numberofTries++;
        guessesMade.push[userGuess];
    }
}

// /^[a-z]+$/