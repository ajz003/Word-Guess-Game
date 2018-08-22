var wins = 0
var losses = 0
var guessesLeft = 6

var dictionary = ["scala", "swift", "shell", "typescript", "c", "go", "css", "php", "ruby", "java", "python", "javascript"];

var computerGuess = dictionary[Math.floor(Math.random() * dictionary.length)]
console.log("comp guess: " + computerGuess)

var wordDisplay = [];
var _Display = [];

for (var i = 0; i < computerGuess.length; i++) {
    wordDisplay.push(computerGuess.charAt(i));
}
console.log(wordDisplay)

for (var i = 0; i < computerGuess.length; i++) {
    _Display.push("_ ");
}
console.log(_Display)

var prevGuesses = [];

console.log("wins :" + wins)




document.onkeyup = function (event) {

    userGuess = event.key
    console.log("userGuess: " + userGuess)


    for (var i = 0; i < wordDisplay.length; i++) {

        if (wordDisplay[i] === event.key) {
            _Display.splice(i, 1, userGuess);
        }


    }

    console.log("Previous Guesses: " + prevGuesses);
    console.log("Guesses left: " + guessesLeft);

    if (wordDisplay.includes(userGuess) == false && prevGuesses.includes(userGuess) == false) {
        guessesLeft--;
        prevGuesses.push(userGuess);
        console.log("Previous Guesses: " + prevGuesses);
        console.log("Guesses left: " + guessesLeft);
    }

    if (_Display.toString() == wordDisplay.toString()) {
        alert("You win! The word was " + wordDisplay.join('').toUpperCase() + " !");
        reset();
    }
    console.log(_Display.toString());
    console.log(wordDisplay.toString());

    if (guessesLeft === 0) {
        alert("You lose. The word was " + wordDisplay.join('').toUpperCase());
        reset();
    }


    var w = document.getElementById("wins");
    w.textContent = wins;
    
    var cw = document.getElementById("current-word")
    cw.textContent = _Display.join('').toUpperCase()
    
    var gr = document.getElementById("guesses-remaining")
    gr.textContent = guessesLeft;
    
    var ag = document.getElementById("already-guessed")
    ag.textContent = prevGuesses

};

function reset() {

    guessesLeft = 6;

    computerGuess = dictionary[Math.floor(Math.random() * dictionary.length)]
    console.log("comp guess: " + computerGuess)

    wordDisplay = [];

    _Display = [];

    for (var i = 0; i < computerGuess.length; i++) {
        wordDisplay.push(computerGuess.charAt(i));
    }
    console.log(wordDisplay)

    for (var i = 0; i < computerGuess.length; i++) {
        _Display.push("_ ");
    }
    console.log(_Display)


    prevGuesses = [];


}

