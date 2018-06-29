describe('Collision', () => {
  let bodies;
  let collision;
  let platform;
  let otherPlatform;
  let player;
  let player1;
  let player2;
  let player3;
  let player4;
  let player5;
  let player6;
  let player7;
  let player8;
  let player9;

  beforeEach(() => {
    platform = { center: { x: 150, y: 150 }, size: { x: 100, y: 100 } };
    otherPlatform = { center: { x: 450, y: 100 }, size: { x: 50, y: 75 } };
    player = { resolveTopCollision() {} };
    bodies = [player, platform, otherPlatform];
    collision = new Collision(bodies);
    player1 = { center: { x: 90, y: 150 }, size: { x: 20, y: 20 } };
    player2 = { center: { x: 100, y: 100 }, size: { x: 20, y: 20 } };
    player3 = { center: { x: 150, y: 100 }, size: { x: 20, y: 20 } };
    player4 = { center: { x: 200, y: 100 }, size: { x: 20, y: 20 } };
    player5 = { center: { x: 210, y: 150 }, size: { x: 20, y: 20 } };
    player6 = { center: { x: 150, y: 90 }, size: { x: 20, y: 20 } };
    player7 = { center: { x: 150, y: 210 }, size: { x: 20, y: 20 } };
    player8 = { center: { x: 150, y: 120 }, size: { x: 20, y: 20 } };
    player9 = { center: { x: 150, y: 200 }, size: { x: 20, y: 20 } };
  });

  describe('initialize', () => {
    it('removes player from the bodies array', () => {
      expect(collision.otherBodies).not.toContain(player);
    });

    it('adds platform to the otherBodies array', () => {
      expect(collision.otherBodies).toContain(platform);
    });
  });

  describe('isCollidingOnTop', () => {
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

  describe('isCollidingOnBottom', () => {
    it('returns false when player is below the body', () => {
      expect(collision.isCollidingOnBottom(player7, platform)).toEqual(false);
    });

    it('returns true when player collides bottom of body', () => {
      expect(collision.isCollidingOnBottom(player9, platform)).toEqual(true);
    });
  });

  describe('resolveCollisions', () => {
    it('calls resolveTopCollision on the player with first platform', () => {
      spyOn(collision, 'isCollidingOnTop').and.returnValue(true);
      spyOn(player, 'resolveTopCollision');
      collision.resolveCollisions(bodies);
      expect(player.resolveTopCollision).toHaveBeenCalledWith(
        platform.center.y - platform.size.y / 2
      );
    });

    it('calls resolveTopCollision on the player once per platform', () => {
      spyOn(collision, 'isCollidingOnTop').and.returnValue(true);
      spyOn(player, 'resolveTopCollision');
      collision.resolveCollisions(bodies);
      expect(player.resolveTopCollision.calls.count()).toEqual(collision.otherBodies.length);
    });

    it('calls resolveTopCollision on the player with other platform', () => {
      spyOn(collision, 'isCollidingOnTop').and.returnValue(true);
      spyOn(player, 'resolveTopCollision');
      collision.resolveCollisions(bodies);
      expect(player.resolveTopCollision).toHaveBeenCalledWith(
        otherPlatform.center.y - otherPlatform.size.y / 2
      );
    });

    it('does not call resolveTopCollision if isColliding is false', () => {
      spyOn(collision, 'isCollidingOnTop').and.returnValue(false);
      spyOn(player, 'resolveTopCollision');
      collision.resolveCollisions(bodies);
      expect(player.resolveTopCollision.calls.count()).toEqual(0);
    });

    it('calls resolveTopCollision with first body if it isColliding', () => {
      spyOn(collision, 'isCollidingOnTop').and.returnValues(true, false);
      spyOn(player, 'resolveTopCollision');
      collision.resolveCollisions(bodies);
      expect(player.resolveTopCollision).toHaveBeenCalledWith(
        platform.center.y - platform.size.y / 2
      );
    });

    it('does not call resolveTopCollision with first body if it isColliding', () => {
      spyOn(collision, 'isCollidingOnTop').and.returnValues(false, true);
      spyOn(player, 'resolveTopCollision');
      collision.resolveCollisions(bodies);
      expect(player.resolveTopCollision).not.toHaveBeenCalledWith(
        platform.center.y - platform.size.y / 2
      );
    });
  });
});
