//this is just a blinky dancer with a bubble around it


var Queen = function (top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<i class="queen fa-regular fa-chess-queen"></i>');
  this.setPosition(this.top, this.left);
};


Queen.prototype = Object.create(BlinkyDancer.prototype);
Queen.prototype.constructor = Queen;


Queen.prototype.animate = function() {
  Dancer.prototype.step.call(this);
};


Queen.prototype.step = function () {
  this.animate();
  this.$node.toggle();
};