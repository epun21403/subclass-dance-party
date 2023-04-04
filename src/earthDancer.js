var makeEarthDancer = function (top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="earthDancer"></span>');
};

makeEarthDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeEarthDancer.prototype.constructor = makeEarthDancer;

// makeEarthDancer.prototype.shake = function () {
// };