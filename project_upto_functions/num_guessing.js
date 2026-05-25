// Number Guessing Game
function numberGuessingGame() {

    const randomNum =
        Math.floor(Math.random() * 10) + 1;

    let guess;

    do {

        guess = parseInt(
            prompt("Guess a number between 1 and 10:")
        );

        if (guess > randomNum) {
            alert("Too High!");
        }
        else if (guess < randomNum) {
            alert("Too Low!");
        }

    } while (guess !== randomNum);

    alert("Congratulations! You guessed correctly.");

}

numberGuessingGame();