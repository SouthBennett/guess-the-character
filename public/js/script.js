console.log("Game script loaded!");

// === GAME STATE ===
const gameState = {
  round: 1,
  totalRounds: 10,
  score: 0,
  bestScore: localStorage.getItem("bestScore") ? Number(localStorage.getItem("bestScore")) : 0,
  currentCharacter: null,
  hintsUsed: 0,
  timeLeft: 20,
  timerId: null
};

// === DOM ELEMENTS ===
const homeScreen = document.getElementById