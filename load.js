var loadState = {
  preload: function() {
    var options = { font: '30px Courier', fill: '#ffffff' };
    var loadingLabel = game.add.text(80, 150, 'loading...', options);

    game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('player', 'assets/square.png');
    game.load.image('ball', 'assets/ball.png');
  },

  create: function() {
    game.state.start('menu');
  }
};