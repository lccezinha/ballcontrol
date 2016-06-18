var menuState = {
  create: function() {
    game.add.sprite(0, 0, 'sky');
    game.add.sprite(0, game.world.height - 30, 'ground');

    var labelOptions = { font: "30px Arial", fill: "#ffffff" };
    labelScore = game.add.text(20, 220, 'Press SPACEBAR to Play', labelOptions);

    var spaceBarKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceBarKey.onDown.addOnce(this.startGame, this);
  },

  startGame: function() {
    game.state.start('play');
  }
};
