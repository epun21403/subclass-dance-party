describe('pawn', function() {

  var pawn, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pawn = new Pawn(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(pawn.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(pawn.$node, 'toggle');
    pawn.step();
    expect(pawn.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(pawn, 'step');
      expect(pawn.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(pawn.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(pawn.step.callCount).to.be.equal(2);
    });
  });
});