describe('bishop', function() {

  var bishop, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bishop = new Bishop(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bishop.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(bishop.$node, 'toggle');
    bishop.step();
    expect(bishop.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(bishop, 'step');
      expect(bishop.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bishop.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bishop.step.callCount).to.be.equal(2);
    });
  });
});