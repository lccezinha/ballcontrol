var finishState = {
  preload: function() {
    game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform.png');
  },

  create: function() {
    game.add.sprite(0, 0, 'sky');
    game.add.sprite(0, game.world.height - 30, 'ground');

    var labelOptions = { font: "30px Arial", fill: "#ffffff" };
    labelScore = game.add.text(20, 180, 'Press SPACEBAR to Play', labelOptions);

    var scoreLabel = { font: "30px Arial", fill: "#ffffff" };
    scoreLabel = game.add.text(170, 230, score, labelOptions);

    var spaceBarKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceBarKey.onDown.addOnce(this.startGame, this);

    score = 0;
  },

  startGame: function() {
    game.state.start('menu');
  }
};