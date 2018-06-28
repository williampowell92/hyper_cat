describe('Collision', () => {
  let collision;
  let bodies;

  beforeEach(() => {
    bodies = [];
    collision = new Collision(bodies);
  });

  describe('initialise', () => {
    it('creates bodies', () => {
      expect(collision.bodies).toEqual(bodies);
    });
  })
});
