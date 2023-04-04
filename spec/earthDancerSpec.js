describe('earthDancer', function() {

  var earthDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    earthDancer = new makeEarthDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(earthDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(earthDancer.$node, 'toggle');
    earthDancer.step();
    expect(earthDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(earthDancer, 'step');
      expect(earthDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(earthDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(earthDancer.step.callCount).to.be.equal(2);
    });
  });
});