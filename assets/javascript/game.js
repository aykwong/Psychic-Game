var wins = 0, 
    losses = 0, 
    triesLeft = 9,
    guessesMade = [],
    result = 0,
    alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("triesLeft").innerHTML = triesLeft;

console.log(computerLetter);

document.onkeyup = function userGuess() {

    var userGuess = event.key;
    for (var i = 0; i < guessesMade.length; i++) {
        if (userGuess === guessesMade[i].slice(1)) {
            alert("You made that guess already.");
            return;
        }
    }

    if (userGuess === computerLetter) {
        triesLeft--;
        document.getElementById("triesLeft").innerHTML = triesLeft;
        wins++;
        document.getElementById("wins").innerHTML = wins;
        result = 1;
        alert("Congratulations! You guessed the letter, " + computerLetter + "." + " It took you " + (9 - triesLeft) + " tries.");
    } else {
        triesLeft--;
        document.getElementById("triesLeft").innerHTML = triesLeft;
        guessesMade.push(" " + userGuess);
        document.getElementById("guessesMade").innerHTML = guessesMade;
    }

    if (triesLeft === 0) {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        result = 1;
    }

    if (result === 1) {
        computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerLetter);
        triesLeft = 9;
        document.getElementById("triesLeft").innerHTML = triesLeft;
        guessesMade = [];
        document.getElementById("guessesMade").innerHTML = guessesMade;
        result = 0;
    }
}