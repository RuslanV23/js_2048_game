'use strict';

const { default: Cell } = require('./Cell.class');

/**
 * This class represents the game.
 * Now it has a basic structure, that is needed for testing.
 * Feel free to add more props and methods if needed.
 */
class Game {
  /**
   * Creates a new game instance.
   *
   * @param {number[][]} initialState
   * The initial state of the board.
   * @default
   * [[0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0]]
   *
   * If passed, the board will be initialized with the provided
   * initial state.
   */
  constructor(
    initialState = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  ) {
    /** @type {'idle' | 'playing' | 'win' | 'lose'} */
    this.status = 'idle';
    this.initialState = initialState;

    this.state = Array(this.initialState.length)
      .fill([])
      .map(() => {
        return Array(this.initialState[0].length).fill(null);
      });

    this.sizeFiled = { y: initialState.length, x: initialState[0].length };
    this.score = 0;
    this.cellElements = document.querySelector('.game-board__cells');
  }

  setInitialFild() {
    [...this.cellElements.children].forEach((child) => {
      child.remove();
    });
    // console.log(this.state);

    this.initialState.forEach((row, y) => {
      row.forEach((cellValue, x) => {
        if (cellValue === 0) {
          return;
        }
        this.state[y][x] = new Cell([y, x], cellValue);
        this.cellElements.append(this.state[y][x].element);
      });
    });
  }

  getCell({ x, y }) {
    return this.state[y][x];
  }

  setCell({ x, y }, value) {
    this.state[y][x] = value;
  }

  moveLeft() {}
  moveRight() {
    for (let y = 0; y < this.sizeFiled.y; y++) {
      const mergeCells = [];

      for (let x = this.sizeFiled.x - 1; x >= 0; x--) {
        const currentCell = this.getCell({ y, x });

        if (!currentCell) {
          continue;
        }

        let nextPositionX = x;
        let mergeCell = null;

        while (nextPositionX < this.sizeFiled.x - 1) {
          const nextCell = this.getCell({ y, x: nextPositionX + 1 });

          if (!nextCell) {
            nextPositionX++;
            continue;
          }

          if (
            nextCell.value === currentCell.value &&
            !mergeCells.includes(nextCell)
          ) {
            nextPositionX++;
            mergeCell = nextCell;
          }

          break;
        }

        if (mergeCell) {
          currentCell.element.classList.add('game-board__cell--deactive');
          mergeCell.element.classList.add('game-board__cell--merge');
          mergeCells.push(mergeCell);
          mergeCell.setValue(mergeCell.value * 2);

          this.setCell({ y, x }, null);

          currentCell.setPosition([y, nextPositionX]);

          setTimeout(() => {
            currentCell.element.remove();
          }, 300);
          continue;
        }

        if (nextPositionX === x) {
          continue;
        }

        this.setCell({ y, x }, null);
        this.setCell({ y, x: nextPositionX }, currentCell);
        currentCell.setPosition([y, nextPositionX]);
      }
    }
  }
  moveUp() {
    for (let x = 0; x < this.sizeFiled.x; x++) {
      const mergeCells = [];

      for (let y = this.sizeFiled.y - 1; y >= 0; y--) {
        const currentCell = this.getCell({ y, x });

        if (!currentCell) {
          continue;
        }

        let nextPositionX = y;
        let mergeCell = null;

        while (nextPositionX < this.sizeFiled.y - 1) {
          const nextCell = this.getCell({ x, y: nextPositionX + 1 });

          if (!nextCell) {
            nextPositionX++;
            continue;
          }

          if (
            nextCell.value === currentCell.value &&
            !mergeCells.includes(nextCell)
          ) {
            nextPositionX++;
            mergeCell = nextCell;
          }

          break;
        }

        if (mergeCell) {
          mergeCells.push(mergeCell);
          mergeCell.setValue(mergeCell.value * 2);
          this.setCell({ y, x }, null);
          currentCell.element.classList.add('game-board__cell--deactive');
          mergeCell.element.classList.add('game-board__cell--merge');
          currentCell.setPosition([nextPositionX, x]);

          setTimeout(() => {
            currentCell.element.remove();
          }, 300);
          continue;
        }

        if (nextPositionX === y) {
          continue;
        }

        this.setCell({ y, x }, null);
        this.setCell({ x, y: nextPositionX }, currentCell);
        currentCell.setPosition([nextPositionX, x]);
      }
    }
  }
  moveDown() {}

  /**
   * @returns {number}
   */
  getScore() {
    return this.score;
  }

  /**
   * @returns {number[][]}
   */
  getState() {
    return this.state;
  }

  /**
   * Returns the current game status.
   *
   * @returns {string} One of: 'idle', 'playing', 'win', 'lose'
   *
   * `idle` - the game has not started yet (the initial state);
   * `playing` - the game is in progress;
   * `win` - the game is won;
   * `lose` - the game is lost
   */
  getStatus() {
    return this.status;
  }

  /**
   * Starts the game.
   */
  start() {
    this.status = 'playing';
    this.setInitialFild();

    document.addEventListener('keydown', (event2) => {
      switch (event2.code) {
        case 'ArrowDown':
        case 'KeyS':
          this.moveDown();
          break;

        case 'ArrowUp':
        case 'KeyW':
          this.moveUp();
          break;

        case 'ArrowRight':
        case 'KeyD':
          this.moveRight();
          break;

        case 'ArrowLeft':
        case 'KeyA':
          this.moveLeft();
          break;

        default:
          break;
      }
    });
  }

  /**
   * Resets the game.
   */
  restart() {
    this.setInitialFild();
  }

  // Add your own methods here
}

module.exports = Game;
