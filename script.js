const Gameboard = (function() {
  function createGameboard() {
    const array = 
      ["", "", "", 
       "", "", "", 
       "", "", ""];
    return {array};
  }
  return createGameboard();
})();

const gameController = (function() {

  let player1 = createPlayer("player1", "x");
  let player2 = createPlayer("player2", "o");
  let activePlayer = player1;
  let gameWon = false;

  function createPlayer(name, symbol) {
    return {
      name,
      symbol,
      score: 0,
    }
  }

  function startGame () {
    Gameboard.array = 
      ["", "", "", 
       "", "", "", 
       "", "", ""];
    gameWon = false;
    activePlayer = player1;
    //create player1
    //create player2
  }

  function playRound (choice){
    if (Gameboard.array[choice] === "" && gameWon === false)  {
      Gameboard.array[choice] = activePlayer.symbol;
      checkWin();
      switchPlayer();
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
            alert(`${activePlayer.name} wins!`);
          gameWon = true;
        } 
    }
    const isTie = Gameboard.array.every(cell => cell !== "");
    
    if (gameWon === false && isTie) {alert("It's a tie!")};

    return gameWon;
  }

  function getActivePlayer () {
    return activePlayer;
  }

  return {
    createPlayer,
    player1,
    player2,
    startGame,
    playRound,
    switchPlayer,
    checkWin,
    getActivePlayer,
  }

})();

function playerInput () {
    //grab dom elements for clicking
    //return those elements
  }

function displayController () {
  // grabs dom elements
  // displays the state of elements
};