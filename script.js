const Gameboard = (function() {
  const array = 
    ["", "", "", 
      "", "", "", 
      "", "", ""];
  return {array};
})();

const gameController = (function() {

  let player1;
  let player2;
  let activePlayer = player1;
  let gameWon = false;
  let gameRunning = false;
  let isTie = false;

  function createPlayer(name, symbol) {
    return {
      name,
      symbol,
      score: 0,
    }
  }

  function setPlayers(name1, name2) {
    player1 = createPlayer(name1, "X")
    player2 = createPlayer(name2, "O")
  }

  function startGame () {
    gameRunning = true;
    Gameboard.array = 
      ["", "", "", 
       "", "", "", 
       "", "", ""];
    gameWon = false;
    isTie = false;
    activePlayer = player1;
    displayController.updateDisplay();
    ;
  }

  function playRound (choice){
    if (gameRunning) {
      if (Gameboard.array[choice] === "" && gameWon === false)  {
        Gameboard.array[choice] = activePlayer.symbol;
        checkWin();
        if (!gameWon) {
          switchPlayer();
        }
        displayController.updateDisplay();

      }
    }
  }

  function switchPlayer () {
    if (activePlayer == player1) {
      activePlayer = player2
    } else { activePlayer = player1};
  }

  function checkWin () {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    
    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;

      if (Gameboard.array[a] !== "" && 
          Gameboard.array[a] === Gameboard.array[b] &&
          Gameboard.array[b] === Gameboard.array[c]) {
            gameWon = true;
            gameRunning = false;
        } 
    }

    isTie = Gameboard.array.every(cell => cell !== "");

    if (gameWon === false && isTie) {
      gameRunning = false;
    };
  }

  function getStatus () {
    return { 
      activePlayer,
      isTie,
      gameWon,
    }
  }

  return {
    createPlayer,
    setPlayers,
    startGame,
    playRound,
    switchPlayer,
    checkWin,
    getStatus,
  }

})();

const playerInput = (function() {
    const gameboard = document.querySelector(".gameboard");
    const startButton = document.querySelector(".startButton");
    const player1Name = document.querySelector("#player1Name");
    const player2Name = document.querySelector("#player2Name");

    gameboard.addEventListener("click", (event) => {
      let target = event.target.dataset.index;
      gameController.playRound(target);
    });

    startButton.addEventListener("click", () => {
      gameController.setPlayers(player1Name.value, player2Name.value); 
      gameController.startGame();
    })
})();

const displayController = (function() {
  const gameboard = document.querySelector(".gameboard");
  let gameText = document.querySelector(".active-player");

  function updateDisplay() {
    const status = gameController.getStatus()

    while (gameboard.firstChild) {
      gameboard.removeChild(gameboard.firstChild)
    };

    Gameboard.array.forEach((cell, index) => {
      const square = document.createElement("div");
      square.textContent = cell;
      square.classList = "square";
      square.dataset.index = index;
      gameboard.appendChild(square);
    });

    if (status.gameWon) {
      gameText.textContent = `${status.activePlayer.name} wins!`;
    } else if (status.isTie) {
      gameText.textContent = "It's a tie!";
    } else {
      gameText.textContent = `${status.activePlayer.name}'s Turn!`
    }
  }

  return {
    updateDisplay,
  }

})();