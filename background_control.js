var BackgroundControl  = function() {};

BackgroundControl.prototype.create = function() {
  game.add.sprite(0, 0, 'sky');
  game.add.sprite(0, game.world.height - 30, 'ground');
};