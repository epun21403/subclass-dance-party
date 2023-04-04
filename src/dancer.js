var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="Dancer fa-solid fa-user-secret fa-2xl"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(this.top, this.left);
};


Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var color = Boolean(Math.random() >= 0.5) ? 'rgb(29, 12, 12)' : 'rgb(177, 176, 178)';
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  this.$node.animate({
    left: 0
  });
};
