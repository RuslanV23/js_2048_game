'use strict';

// Uncomment the next lines to use your game instance in the browser
const Game = require('../modules/Game.class');
const game = new Game();

const buttonStart = document.querySelector('.button.start');

buttonStart.addEventListener('click', () => {
  if (buttonStart.classList.contains('start')) {
    game.start();

    buttonStart.textContent = 'Restart';
    buttonStart.classList.remove('start');
    buttonStart.classList.add('restart');
  } else {
    game.restart();
  }
});

// Write your code here

// const testPasteCell = () => {
//   const cells = document
//     .querySelector('.game-board')
//     .querySelector('.game-board__cells');

//   let power = 2;

//   for (let i = 0; i < 4 * 4; i++) {
//     const x = i % 4;
//     const y = Math.floor(i / 4);

//     const newCell = document.createElement('div');

//     newCell.classList.add('game-board__cell');
//     newCell.classList.add('game-board__cell--' + power);
//     newCell.textContent = power;
//     newCell.style.setProperty('--position-x', x);
//     newCell.style.setProperty('--position-y', y);
//     cells.append(newCell);

//     power *= 2;
//     power = power > 2048 ? 2 : power;
//   }
// };

// testPasteCell();
