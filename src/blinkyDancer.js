//use this as the template for new dancers

//this is just a dancer that blinks
var BlinkyDancer = function(top, left, timeBetweenSteps) {
  //inherit from the dancer super class
  Dancer.call(this, top, left, timeBetweenSteps);
};

//more inherit from super class
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

//this pulls the dancers "step" method, which is essential for animation
BlinkyDancer.prototype.animate = function() {
  Dancer.prototype.step.call(this);
};

//this uses the established "frame rate" to apply animation methods such as toggle
BlinkyDancer.prototype.step = function () {
  this.animate();
  this.$node.toggle();
};

/*
NOTES
cool ideas
add a button to add multiple of a certain dancer
added in font awesome icons for increased variety of dancers
give the water dancer a circular border with a water color, so it can have a bubble and that's its unique property

things i dont know
why the weird dancer wont show up
why the water dancer doesn't take a random position

things i do know
earth dancer spawns randomly and gets a random framerate
water dancer isnt properly getting the position applied even though its applied 2 times
weird dancer is defined and no longer gives an error. but it does not appear on button click
when we eventually create the lineup method, i think we can just put it on the dancer superclass so that any dancer can do it. but when that method gets called, we can tell all of the dancers to go to the same y position but if we tell them to go to the same x position then they would all cluster on the same spot, so we need to give each of the dancers a different x position. so basically we can hard code the y position to go to but cannot do the same for the x position

*/