var menuState = {
  create: function() {
    new BackgroundControl().create();

    var labelOptions = { font: "30px Arial", fill: "#ffffff" };
    labelScore = game.add.text(20, 220, 'Press SPACEBAR to Play', labelOptions);

    var spaceBarKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceBarKey.onDown.addOnce(this.startGame, this);
  },

  startGame: function() {
    game.state.start('play');
  }
};
