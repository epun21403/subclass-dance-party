describe('queen', function() {

  var queen, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    queen = new Queen(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(queen.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(queen.$node, 'toggle');
    queen.step();
    expect(queen.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(queen, 'step');
      expect(queen.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(queen.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(queen.step.callCount).to.be.equal(2);
    });
  });
});