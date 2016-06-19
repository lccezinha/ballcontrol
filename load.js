var loadState = {
  preload: function() {
    new BackgroundControl().create();

    var labelOptions = { font: '30px Courier', fill: '#ffffff' };
    game.add.text(80, 150, 'loading...', labelOptions);

    game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('player', 'assets/square.png');
    game.load.image('ball', 'assets/ball.png');
  },

  create: function() {
    game.state.start('menu');
  }
};