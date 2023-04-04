//this is just a blinky dancer with a bubble around it


var Rook = function (top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<i class="Rook fa-solid fa-chess-rook fa-shake fa-2xl"></i>');
  this.setPosition(this.top, this.left);
};


Rook.prototype = Object.create(BlinkyDancer.prototype);
Rook.prototype.constructor = Rook;


Rook.prototype.animate = function() {
  Dancer.prototype.step.call(this);
};


Rook.prototype.step = function () {
  this.animate();
  this.$node.toggle();
};