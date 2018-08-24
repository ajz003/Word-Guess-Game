# Hackerman (A Hangman Game)
_____

Hackerman is an extremely basic hangman clone that foregoes the hangman graphics in favor of a counter of guesses left.

# Motivation
_____

Making a game in JavaScript is a great (if not a bit frustrating at times) way to learn the language. Also, games are fun!

# Built With
_____

HTML/CSS, JavaScript, Bootstrap.

# Code Example
_____

```
var computerGuess = dictionary[Math.floor(Math.random() * dictionary.length)]
```
```
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
```
# Authors
_____

* Anthony Zheng

# Acknowledgments
_____

* Clark Nielsen
* Patrick Finazzo
* Peter Hoang
* Everyone in the class!