// This function returns a random number between 1 and 100
function randomNumber() {
    return Math.ceil(Math.random() * 100);
  }

  // This function takes a string as single parameter and outputs it to HTML
  function printOnScreen(value) {
    let game = document.getElementById("game");
    let line = document.createElement("div");
    line.textContent = value;
    game.appendChild(line);
  };

  // This variable contains the secret number that the user needs to guess
  let secretNumber = randomNumber();

  // This function is called every time the user guesses a new number
  function onGuess(guessedNumber) {
      // TODO - call printOnScreen function with a string
      // informing the user whether the secret number is
      // smaller, larger or equal
      console.log("user guessed: " + guessedNumber);
  }
