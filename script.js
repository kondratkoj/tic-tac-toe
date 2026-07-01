
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
  let player2 = createPlayer("player2", "o");

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

  function playRound (){
    //check if spot is a number
    //change spot to player symbol
    //checkWin
    //switchPlayer
  }

  function switchPlayer () {
    //if move is valid (not clicking on a square already chosen)
    //when symbol is changed, change player
  }

  function checkWin () {
    //look for patterns in array 
    //0, 1, 2
    //3, 4, 5
    //6, 7, 8
    //0, 3, 6
    //1, 4, 7
    //2, 5, 8
    //0, 4, 8
    //2, 4, 6
    //determin which player has those symbols
    //that player wins
  }

  return {
    createPlayer,
    player1,
    player2,
    startGame,
    playRound,
    switchPlayer,
    checkWin
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