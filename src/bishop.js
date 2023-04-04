//this is just a blinky dancer with a bubble around it


var Bishop = function (top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<i class="Bishop fa-solid fa-chess-bishop fa-bounce fa-2xl"></i>');
  this.setPosition(this.top, this.left);
};


Bishop.prototype = Object.create(BlinkyDancer.prototype);
Bishop.prototype.constructor = Bishop;


Bishop.prototype.animate = function() {
  Dancer.prototype.step.call(this);
};


Bishop.prototype.step = function () {
  this.animate();
  // this.$node.toggle();
};