class Board {
  constructor() {
    this.rows = [
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ];

    this.currentPlayer = 'Player One';
    this.isOver = false;
    this.winner = null;
  }

  chooseRandomShipDirection() {
    let direction = Math.round(Math.random());
    return direction ? 'horizontal' : 'vertical';
  }

  placeRandomHorizontalShip() {
    const shipLength = Math.floor((Math.random() * (this.rows[0].length - 1))) + 2;
    const shipName = 's' + shipLength;

    const row = Math.floor(Math.random() * 4);

    const maxColStartPoint = this.rows.length - shipLength;
    const colStartPoint = Math.floor(Math.random() * maxColStartPoint);

    for (let col = colStartPoint; col < colStartPoint + shipLength; col++) {
      this.rows[row][col] = shipName;
    }
  }
};
