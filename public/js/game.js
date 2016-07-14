var game = new Phaser.Game(400, 500, Phaser.AUTO, 'gameDiv');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('finish', finishState);

game.state.start('boot');