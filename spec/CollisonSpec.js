describe('Collision', () => {
  let bodies;
  let collision;
  let platform;
  let player1;
  let player2;

  beforeEach(() => {
    platform = { center: { x: 150, y: 150 }, size: { x: 100, y: 100 } };
    player1 = { center: { x: 90, y: 150 }, size: { x: 20, y: 20 } };
    player2 = { center: { x: 100, y: 100 }, size: { x: 20, y: 20 } };
    bodies = [];
    collision = new Collision(bodies);
  });

  describe('isColliding', () => {
    it('returns false when player is to the left of body', () => {
      expect(collision.isColliding(player1, platform)).toEqual(false);
    });

    it('returns true when player collides top left of body', () => {
      expect(collision.isColliding(player2, platform)).toEqual(true);
    });
  });
});
