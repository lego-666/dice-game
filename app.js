// тоглоом дууссан эсхийг хадгалах толөвийн хуввсагч
var isGameOver;

var activePlayer;

var scores;

var roundScore;

var diceDom = document.querySelector(".dice");
initGame();
isGameOver = true;

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isGameOver) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display = "block";

    diceDom.src = "dice-" + diceNumber + ".png";

    if (diceNumber !== 1) {
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("Тоглоом дууссан байна. New Game товчийг дарж шинээр эхэлнэ үү");
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isGameOver) {
    scores[activePlayer] = scores[activePlayer] + roundScore;

    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      //Тоглоомыг дууссан төлөвт оруулна
      isGameOver = false;

      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("Тоглоом дууссан байна. New Game товчийг дарж шинээр эхэлнэ үү");
  }
});
function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceDom.style.display = "none";
}
// Шинэ тоглоом эхлүүлэх товчны эвент лист
document.querySelector(".btn-new").addEventListener("click", function () {
  initGame();
});
function initGame() {
  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  diceDom.style.display = "none";
  // Тоглочдын нэрийг буцааж гаргах
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
