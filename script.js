
const Gameboard = (function() {
  function createGameboard() {
    const array = 
      [".", ".", ".", 
       ".", ".", ".", 
       ".", ".", "."];
    return {array};
  }
  return createGameboard();
})();

const gameController = (function() {

  let player1 = createPlayer("player1", "x");
  let player2 = createPlater("player2", "o");

  function createPlayer(name, symbol) {
    return {
      name,
      symbol,
      score: 0,
    }
  }

  function startGame () {
    Gameboard.array = 
      ["0", "1", "2", 
       "3", "4", "5", 
       "6", "7", "8"];
    //create player1
    //create player2
  }

  function switchTurn () {
    
  }

  function checkWin () {

  }

  return {
    createPlayer,
    player1,
    player2,
    startGame,
    switchTurn,
    checkWin,
  }

})();

function displayController () {
  // grabs dom elements
  // displays the state of elements
}

function playerInput () {
  // grab dom elements
  // changes element based on which player clicks it
}