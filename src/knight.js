//this is just a blinky dancer that ...

var Knight = function (top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<i class="knight fa-regular fa-chess-knight"></i>');
  this.setPosition(this.top, this.left);
};
Knight.prototype = Object.create(BlinkyDancer.prototype);
Knight.prototype.constructor = Knight;


Knight.prototype.animate = function() {
  Dancer.prototype.step.call(this);
};


Knight.prototype.step = function () {
  this.animate();
  this.$node.toggle();
};