'use strict';

// Uncomment the next lines to use your game instance in the browser
const Game = require('../modules/Game.class');
const game = new Game(null);

game.start();
// console.table(game.getState());

document.addEventListener('keydown', (e) => {
  let moved = false;

  switch (e.key) {
    case 'ArrowLeft':
      moved = game.moveLeft();
      break;
    case 'ArrowRight':
      moved = game.moveRight();
      break;
    case 'ArrowUp':
      moved = game.moveUp();
      break;
    case 'ArrowDown':
      moved = game.moveDown();
      break;
  }

  if (moved) {
    game.addRandomTile();
    // console.clear();
    // console.table(game.getState());
    // console.log('Score:', game.getScore());
    // console.log('Status:', game.getStatus());
  }
});
