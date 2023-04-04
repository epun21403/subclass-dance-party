//this is just a blinky dancer with a bubble around it


var King = function (top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<i class="king fa-regular fa-chess-king"></i>');
  this.setPosition(this.top, this.left);
};


King.prototype = Object.create(BlinkyDancer.prototype);
King.prototype.constructor = King;


King.prototype.animate = function() {
  Dancer.prototype.step.call(this);
};


King.prototype.step = function () {
  this.animate();
  this.$node.toggle();
};
