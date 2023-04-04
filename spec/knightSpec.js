describe('knight', function() {

  var knight, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    knight = new Knight(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(knight.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(knight.$node, 'toggle');
    knight.step();
    expect(knight.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(knight, 'step');
      expect(knight.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(knight.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(knight.step.callCount).to.be.equal(2);
    });
  });
});
