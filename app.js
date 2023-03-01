let randomNumber;
let guess;

const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const resetButton = document.getElementById("reset-button");

// Function to start a new game
function newGame() {
  // Generate a random number between 1 and 100
  randomNumber = Math.floor(Math.random() * 100) + 1;

  // Reset the guess variable
  guess = NaN;

  // Clear the guess input field
  guessInput.value = "";
}

// Function to play the game
function playGame() {
  // Get the user's guess from the input field
  guess = parseInt(guessInput.value);

  // Check if the guess is correct
  if (guess === randomNumber) {
    alert("Congratulations, you guessed the number!");

    // Ask the user if they want to play again
    if (confirm("Do you want to play again?")) {
      newGame();
    }
  } else {
    // Tell the user if their guess is too high or too low
    if (guess > randomNumber) {
      alert("Too high! Guess again.");
    } else {
      alert("Too low! Guess again.");
    }
  }
}

// Event listener for the guess button
guessButton.addEventListener("click", function() {
  playGame();
});

// Event listener for the reset button
resetButton.addEventListener("click", function() {
  newGame();
});

// Start a new game
newGame();

// Popup window
let modal = document.getElementById("modal");
let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
};

