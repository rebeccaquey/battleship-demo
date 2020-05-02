$(document).ready(function() {
  // Selections
  var $titleContainer = $('#title-container');
  var $mainContainer = $('#main-container');

  // New Elements
  var $title = $('<span id="title">Battle Ship</span>');
  var $buttonContainer = $('<div id="button-container"></div>');
  var $startGameButton = $('<button id="start-game-button">Start Game!</button>');

  // Event Listeners
  $startGameButton.on('click', handleStartGameButtonClick);

  // Event Handlers
  function handleStartGameButtonClick(event) {
    // 1. Clear the $mainContainer
    $mainContainer.html('');
    // 2. Initialize a new game
    const battleShip = new BattleShipGame();
      // 2a. Create a new "board"
      // 2b. Render board UI to screen
      battleShip.board.placeRandomHorizontalShip();
      console.log(battleShip.board.rows);
      battleShip.renderBoard();
      // 2c. Add event handlers to each cell in the board
  }

  // Render Elements
  $titleContainer.append($title);
  $mainContainer.append($buttonContainer);
  $buttonContainer.append($startGameButton);

});
