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

    //change the number to be this.rows.length so it isn't hard coded to a certain number
    const row = Math.floor(Math.random() * this.rows.length);

    //math.random returns a random number in the range of 0 to less than 1 (not inclusive of 1) so we need to add 1 to our maxcolstartpoint so when you math.random it, it could still include the rowlength - shiplength
    const maxColStartPoint = this.rows.length - shipLength + 1;
    const colStartPoint = Math.floor(Math.random() * maxColStartPoint);

    for (let col = colStartPoint; col < colStartPoint + shipLength; col++) {
      this.rows[row][col] = shipName;
    }
  }
};
