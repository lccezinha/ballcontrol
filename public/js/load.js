var loadState = {
  preload: function() {
    new BackgroundControl().create();

    var labelOptions = { font: '30px Courier', fill: '#ffffff' };
    game.add.text(80, 150, 'loading...', labelOptions);

    game.load.image('sky', 'images/sky.png');
    game.load.image('ground', 'images/platform.png');
    game.load.image('player', 'images/square.png');
    game.load.image('ball', 'images/ball.png');
  },

  create: function() {
    game.state.start('menu');
  }
};