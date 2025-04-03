const gamebody = document.querySelector(".game-container");
const number = document.querySelector("#number");
const GameText = document.querySelector("#game-text");
const inputEl = document.querySelector("#input-el");
const checkBtn = document.querySelector("#check-btn");
const againBtn = document.querySelector("#again-btn");
// score
const currentScore = document.querySelector("#current-score");
const highestScore = document.querySelector("#highest-score");
// score variables
let score = 10;
let highScore = 0;

// score Textcontents
currentScore.textContent = score;
highestScore.textContent = highScore;

const twentyOne = new Audio("/21 - Sound Effect (HD).mp3");
// Random Number
let randomIndex = Math.trunc(Math.random() * 20) + 1;
console.log(randomIndex);

checkBtn.addEventListener("click", () => {
  const guess = Number(inputEl.value);
  console.log(guess, typeof guess);

  if (!guess) {
    GameText.textContent = "❌ No number typed";
  } else if (guess === randomIndex) {
    GameText.textContent = "✅Corrent Answer";
    number.textContent = randomIndex;
    gamebody.style.backgroundColor = "#60ce3173";
    if (score > highScore) {
      highScore = score;
      highestScore.textContent = highScore;
    }
  } else if (guess === 21) {
    GameText.textContent = "You though i dint know💀";
    number.textContent = 21;
    number.style.color = "#f410b3";
    gamebody.style.backgroundColor = "#fca1e2b2";
    twentyOne.play();
  } else if (guess !== randomIndex) {
    if (score > 1) {
      GameText.textContent = guess > randomIndex ? "📈Too High" : "📉Too Low";
      score--;
      currentScore.textContent = score;
    } else {
      currentScore.textContent = 0;
      GameText.textContent = "Game over☠️";
      gamebody.style.backgroundColor = "#f74d4db7";
      number.textContent = "☠️";
      highScore = 0;
      highestScore.textContent = highScore;
    }
  }
});

againBtn.addEventListener("click", () => {
  inputEl.value = "";
  gamebody.style.backgroundColor = " rgba(0, 0, 0, 0.234)";
  number.style.color = "#fff";
  score = 10;
  currentScore.textContent = score;
  number.textContent = "?";
  GameText.textContent = "Start Guessing ...";
  randomIndex = Math.trunc(Math.random() * 20) + 1;
});
