describe('king', function() {

  var king, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    king = new King(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(king.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(king.$node, 'toggle');
    king.step();
    expect(king.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(king, 'step');
      expect(king.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(king.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(king.step.callCount).to.be.equal(2);
    });
  });
});