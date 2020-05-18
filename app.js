// Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 1;
// Тоглочийн  цуглуулсан тоог хадгалах хувьсагч
var score = [0, 0];
// Идвэхтэй тоглогчийн ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var dice = Math.floor(Math.random() * 6) + 1;

//<div class="player-score" id="score-0">43</div>

// window.document.querySelector("#score-0").textContent = dice;
window.document.querySelector("#score-0").textContent = 0;
window.document.querySelector("#score-1").textContent = 0;
window.document.querySelector("#curent-0").textContent = 0;
window.document.querySelector("#curent-1").textContent = 0;

document.querySelector(".dice").style.display = "none";
console.log("шоо буулаа " + dice);
