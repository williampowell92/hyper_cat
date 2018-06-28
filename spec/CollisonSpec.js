describe('Collision', () => {
  let bodies;
  let collision;
  let platform;
  let player
  let player1;
  let player2;
  let player3;
  let player4;
  let player5;
  let player6;
  let player7;
  let player8;

  beforeEach(() => {
    platform = { center: { x: 150, y: 150 }, size: { x: 100, y: 100 } };
    player = { resolveCollision() {} };
    bodies = [player, platform];
    collision = new Collision(bodies);
  });

  describe('initialize', () => {
    it('removes player from the bodies array', () => {
      expect(collision.otherBodies).not.toContain(player);
    });

    it('keeps adds platform from the otherBodies array', () => {
      expect(collision.otherBodies).toContain(platform);
    });
  });

  describe('isCollidingOnTop', () => {
    beforeEach(() => {
      player1 = { center: { x: 90, y: 150 }, size: { x: 20, y: 20 } };
      player2 = { center: { x: 100, y: 100 }, size: { x: 20, y: 20 } };
      player3 = { center: { x: 150, y: 100 }, size: { x: 20, y: 20 } };
      player4 = { center: { x: 200, y: 100 }, size: { x: 20, y: 20 } };
      player5 = { center: { x: 210, y: 150 }, size: { x: 20, y: 20 } };
      player6 = { center: { x: 150, y: 90 }, size: { x: 20, y: 20 } };
      player7 = { center: { x: 150, y: 210 }, size: { x: 20, y: 20 } };
      player8 = { center: { x: 150, y: 120 }, size: { x: 20, y: 20 } };
    });

    it('returns false when player is to the left of body', () => {
      expect(collision.isCollidingOnTop(player1, platform)).toEqual(false);
    });

    it('returns true when player collides top left of body', () => {
      expect(collision.isCollidingOnTop(player2, platform)).toEqual(true);
    });

    it('returns true when player collides top of body', () => {
      expect(collision.isCollidingOnTop(player3, platform)).toEqual(true);
    });

    it('returns true when player collides top right of body', () => {
      expect(collision.isCollidingOnTop(player4, platform)).toEqual(true);
    });

    it('returns false when player is to the right of body', () => {
      expect(collision.isCollidingOnTop(player5, platform)).toEqual(false);
    });

    it('returns false when player is above the body', () => {
      expect(collision.isCollidingOnTop(player6, platform)).toEqual(false);
    });

    it('returns false when player is below the body', () => {
      expect(collision.isCollidingOnTop(player7, platform)).toEqual(false);
    });

    it('returns false when player top is below platform top', () => {
      expect(collision.isCollidingOnTop(player8, platform)).toEqual(false);
    });
  });

  describe('resolveCollisions', () => {
    it('calls isColliding on the player', () => {
      spyOn(player, 'resolveCollision');
      collision.resolveCollisions(bodies);
      expect(player.resolveCollision).toHaveBeenCalled();
    });
  });
});
