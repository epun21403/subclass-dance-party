var makeWaterDancer = function (top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="waterDancer"></span>');

};

makeWaterDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeWaterDancer.prototype.constructor = makeWaterDancer;

// makeWaterDancer.prototype.splash = function () {

// };