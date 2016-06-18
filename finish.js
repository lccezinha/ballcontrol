var finishState = {
  create: function() {
    new BackgroundControl().create();

    var labelOptions = { font: "30px Arial", fill: "#ffffff" };
    labelScore = game.add.text(20, 180, 'Press SPACEBAR to Play', labelOptions);

    var scoreLabel = { font: "30px Arial", fill: "#ffffff" };
    scoreLabel = game.add.text(170, 230, score, labelOptions);

    var spaceBarKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceBarKey.onDown.addOnce(this.startGame, this);

    score = 0;
  },

  startGame: function() {
    game.state.start('play');
  }
};