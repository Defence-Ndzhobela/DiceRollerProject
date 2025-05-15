function rollDice() {
  const numberOfDice = Number(document.getElementById("numberOfDice").value);
  const diceResult = document.getElementById("diceResult");
  const diceImage = document.getElementById("diceImage");
  const guessResults = document.getElementById("GuessResult");

  const randomNo = Math.floor(Math.random() * 6) + 1;

  // Set Dice Image
  diceImage.innerHTML = `<img src="IMAGES/${randomNo}.png" alt="Dice ${randomNo}">`;

  // Result Text
  if (numberOfDice === randomNo) {
    diceResult.textContent = `🎉 You rolled: ${randomNo}`;
    guessResults.textContent = "✅ You guessed correctly! You WON!";
    guessResults.style.color = "#27ae60"; // Green
  } else {
    diceResult.textContent = `🎲 You rolled: ${randomNo}`;
    guessResults.textContent = "❌ Incorrect guess. Try again!";
    guessResults.style.color = "#c0392b"; // Red
  }
}
