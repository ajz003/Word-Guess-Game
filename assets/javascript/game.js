window.onload = function() {

    var wins = 0
    var guessesLeft = 8
    var dictionary = ["scala", "swift", "shell", "typescript", "c", "go", "css", "php", "ruby", "java", "python", "javascript"];

    var oldWords = [];
    var computerGuess = dictionary[Math.floor(Math.random() * dictionary.length)]

    console.log("Computer's Guess: " + computerGuess)

    var wordDisplay = [];
    var _Display = [];

    for (var i = 0; i < computerGuess.length; i++) {
        wordDisplay.push(computerGuess.charAt(i));
    }

    for (var i = 0; i < computerGuess.length; i++) {
        _Display.push("_ ");
    }

    var prevGuesses = [];

    var w = document.getElementById("wins");
    w.textContent = wins;

    var cw = document.getElementById("current-word")
    cw.textContent = _Display.join('').toUpperCase()

    var gr = document.getElementById("guesses-remaining")
    gr.textContent = guessesLeft;

    var ag = document.getElementById("already-guessed")
    ag.textContent = prevGuesses


    document.onkeyup = function(event) {

        if (event.keyCode >= 65 && event.keyCode <= 90) {
            userGuess = event.key
        }

        for (var i = 0; i < wordDisplay.length; i++) {

            if (wordDisplay[i] === event.key) {
                _Display.splice(i, 1, userGuess);
            }

        }

        if (oldWords.length < dictionary.length) {
            if (wordDisplay.includes(userGuess) == false && prevGuesses.includes(userGuess) == false) {
                guessesLeft--;
                prevGuesses.push(userGuess);

            }
        }

        if (_Display.toString() == wordDisplay.toString() && oldWords.length < dictionary.length) {
            alert("You win! The word was " + wordDisplay.join('').toUpperCase() + " !");
            wins++;
            reset();
        }

        if (guessesLeft === 0) {
            alert("You lose. The word was " + wordDisplay.join('').toUpperCase());
            reset();
        } else if (oldWords.length === dictionary.length) {
            alert("Game over. Refresh to play again!");
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

        guessesLeft = 8;
        oldWords.push(computerGuess);

        do {
            computerGuess = dictionary[Math.floor(Math.random() * dictionary.length)]
        }
        while (oldWords.includes(computerGuess) === true && oldWords.length < dictionary.length);

        if (oldWords.length < dictionary.length) {

            wordDisplay = [];

            _Display = [];

            for (var i = 0; i < computerGuess.length; i++) {
                wordDisplay.push(computerGuess.charAt(i));
            }

            for (var i = 0; i < computerGuess.length; i++) {
                _Display.push("_ ");
            }

            console.log("Computer's New Guess: " + computerGuess)

            prevGuesses = [];
        }
    }
}