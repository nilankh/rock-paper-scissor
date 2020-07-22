const game = () => {
  let pScore = 0;
  let cScore = 0;

  //   start the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
//   Play Match
const playMatch = () => {
    const options = document.querySelectorAll('options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelectorAll('.computer-hand');
}

  //   Is call all the inner function
  startGame();
  updateScore();
};

// start the game fucntion
game();
