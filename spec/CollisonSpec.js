describe('Collision', () => {
  let bodies;
  let collision;
  let platform;
  let player1;

  beforeEach(() => {
    platform = { center: { x: 150, y: 150 }, size: { x: 100, y: 100 } };
    player1 = { center: { x: 140, y: 150 }, size: { x: 20, y: 20 } };
    bodies = [];
    collision = new Collision(bodies);
  });

  describe('isColliding', () => {
    it('returns false when player is to the left of body', () => {
      expect(collision.isColliding(player1, platform)).toEqual(false);
    });
  });
});
