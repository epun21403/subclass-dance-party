//this is just a dancer that stretches in width and height

var Pawn = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<i class="pawn fa-regular fa-chess-pawn"></i>');
  this.setPosition(this.top, this.left);
};

Pawn.prototype = Object.create(Dancer.prototype);
Pawn.prototype.constructor = Pawn;


Pawn.prototype.animate = function () {
  Dancer.prototype.step.call(this);
};


Pawn.prototype.step = function () {
  this.animate();
  this.$node.toggle();
  // var styleSettings = {
  //   width: Math.random(),
  //   height: Math.random()
  // };
  // this.$node.css(styleSettings);
};