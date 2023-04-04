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
  //if true ? black : white
  var color = Boolean(Math.random() >= 0.5) ? '#1d0c0c' : '#b1b0b2';
  var styleSettings = {
    top: top,
    left: left,
    color: color
  };
  this.$node.css(styleSettings);
};

/*
white - rgb(177, 176, 178)
black - rgb(29, 12, 12)
*/

Dancer.prototype.lineUp = function() {
  var theColorIs = this.$node.css('color');
  if (theColorIs === 'rgb(29, 12, 12)') {
    this.$node.animate({
      top: 60
    });
  } else if (theColorIs === 'rgb(177, 176, 178)') {
    this.$node.animate({
      top: 850
    });
  }
};

Dancer.prototype.discoTime = function() {
  this.$node.animate({
    bottom: 0
  });
};
