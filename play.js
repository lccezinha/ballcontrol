var cursors, player, ball, ball2, scoreLabel;
var score = 0;
var PLAYER_SPEED = 300;

var playState = {
  create: function() {
    score = 0;

    new BackgroundControl().create();

    player = game.add.sprite((game.world.width / 2) - 40, game.world.height - 65, 'player');
    player.scale.setTo(0.7);
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;

    ball = game.add.sprite((game.world.width / 2) - 40, 0, 'ball');
    ball2 = game.add.sprite((game.world.width / 2) - 40, 0, 'ball');
    game.physics.arcade.enable(ball);

    ball.body.gravity.y = 500;
    ball.body.collideWorldBounds = true;
    ball.body.bounce.setTo(0.9, 0.9);

    cursors = game.input.keyboard.createCursorKeys();

    var labelOptions = { font: "30px Arial", fill: "#ffffff" };
    scoreLabel = game.add.text(20, 20, 0, labelOptions);
  },

  update: function() {
    game.physics.arcade.overlap(player, ball, this.handleCollision, this.teste, this);
    if (score > 3){
      game.physics.arcade.overlap(player, ball2, this.handleCollision, this.teste, this);
      game.physics.arcade.enable(ball2);
      this.createBall()
    }

    if (ball.y >= game.world.height - 65 || (ball2.y >= game.world.height - 65)) {
      this.finishGame();
    };

    player.body.velocity.x = 0;

    if (cursors.left.isDown) {
      player.body.velocity.x = -PLAYER_SPEED
    } else if (cursors.right.isDown) {
      player.body.velocity.x = PLAYER_SPEED;
    };
  },

  teste: function(obj1, obj2){
     console.log(obj2)
    this.moveBall(obj2);

  },

  handleCollision: function() {
    this.incrementPoints();

  },

  incrementPoints: function() {
    score += 1;
    scoreLabel.text = score;
  },

  createBall: function(){
    ball2.body.gravity.y = 500;
    ball2.body.collideWorldBounds = true;
    ball2.body.bounce.setTo(0.9, 0.9);
  },

  moveBall: function(selected) {
    selected.body.velocity.x = Math.random() * (-200 + (-200)) + 200;
    selected.body.velocity.y = -500;
  },

  finishGame: function() {
    game.state.start('finish');
  }
};
