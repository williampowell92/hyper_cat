describe('Collision', () => {
  let collision;
  let platform;
  let player1;
  let player2;
  let player3;
  let player4;
  let player5;

  beforeEach(() => {
    platform = { center: { x: 150, y: 150 }, size: { x: 100, y: 100 } };
    player1 = { center: { x: 90, y: 150 }, size: { x: 20, y: 20 } };
    player2 = { center: { x: 100, y: 100 }, size: { x: 20, y: 20 } };
    player3 = { center: { x: 150, y: 100 }, size: { x: 20, y: 20 } };
    player4 = { center: { x: 200, y: 100 }, size: { x: 20, y: 20 } };
    player5 = { center: { x: 210, y: 150 }, size: { x: 20, y: 20 } };
    collision = new Collision();
  });

  describe('isColliding', () => {
    it('returns false when player is to the left of body', () => {
      expect(collision.isColliding(player1, platform)).toEqual(false);
    });

    it('returns true when player collides top left of body', () => {
      expect(collision.isColliding(player2, platform)).toEqual(true);
    });

    it('returns true when player collides top of body', () => {
      expect(collision.isColliding(player3, platform)).toEqual(true);
    });

    it('returns true when player collides top right of body', () => {
      expect(collision.isColliding(player4, platform)).toEqual(true);
    });

    it('returns false when player is to the right of body', () => {
      expect(collision.isColliding(player5, platform)).toEqual(false);
    });
  });
});
