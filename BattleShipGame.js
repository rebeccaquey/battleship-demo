class BattleShipGame {
  constructor() {
    this.board = new Board();

    this.currentPlayer = 'Player One';
    this.isOver = false;
    this.winner = null;
  }

  renderBoard() {
    let $mainContainer = $('#main-container');

    let $boardContainer = $('<div id="board-container"></div>');
    $boardContainer.html('');

    this.board.rows.forEach(function(row, rowIndex) {
      row.forEach(function(cell, colIndex) {
        const $cell = $(`<div class="cell"></div>`);
        const $content = $(`<div class="content"></div>`);

        $cell.append($content);
        $boardContainer.append($cell);
      });
    });

    $mainContainer.append($boardContainer);
  }
};

// 1. Randomly place a ship in the board

// 2. Handle click events on each grid cell
  // Update the model

  // Check for win condition

  // Re-render the board
    // if the clicked cell has a ship
      // Add a red dot
    // else
      // Add a white dot

  // If we have won
    // Display win message
