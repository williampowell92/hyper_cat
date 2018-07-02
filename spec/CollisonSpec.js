describe('Collision', () => {
  let bodies;
  let collision;
  let collisionFactory;
  let mouse;
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
  let player10;
  let player11;
  let player12;
  let player13;

  beforeEach(() => {
    platform = { center: { x: 150, y: 150 }, size: { x: 100, y: 100 }, resolveCollision() {} };
    otherPlatform = { center: { x: 450, y: 100 }, size: { x: 50, y: 75 }, resolveCollision() {} };
    mouse = { center: { x: 600, y: 375 }, size: { x: 20, y: 20 }, resolveCollision() {} };
    player = {
      resolveTopCollision() {},
      resolveBottomCollision() {},
      resolveLeftCollision() {},
      resolveRightCollision() {}
    };
    bodies = [player, platform, otherPlatform, mouse];
    collisionFactory = new CollisionFactory();
    collision = collisionFactory.build(bodies);
    player1 = { center: { x: 90, y: 150 }, size: { x: 20, y: 20 }, velocity: { y: 10 } };
    player2 = { center: { x: 100, y: 100 }, size: { x: 20, y: 20 }, velocity: { y: 10 } };
    player3 = { center: { x: 150, y: 100 }, size: { x: 20, y: 20 }, velocity: { y: 10 } };
    player4 = { center: { x: 200, y: 100 }, size: { x: 20, y: 20 }, velocity: { y: 10 } };
    player5 = { center: { x: 210, y: 150 }, size: { x: 20, y: 20 }, velocity: { y: 10 } };
    player6 = { center: { x: 150, y: 90 }, size: { x: 20, y: 20 }, velocity: { y: 10 } };
    player7 = { center: { x: 150, y: 210 }, size: { x: 20, y: 20 }, velocity: { y: 10 } };
    player8 = { center: { x: 150, y: 120 }, size: { x: 20, y: 20 }, velocity: { y: 10 } };
    player9 = { center: { x: 150, y: 200 }, size: { x: 20, y: 20 }, velocity: { y: -10 } };
    player10 = { center: { x: 100, y: 200 }, size: { x: 20, y: 20 }, velocity: { y: -10 } };
    player11 = { center: { x: 200, y: 200 }, size: { x: 20, y: 20 }, velocity: { y: -10 } };
    player12 = { center: { x: 100, y: 150 }, size: { x: 20, y: 20 }, velocity: {} };
    player13 = { center: { x: 200, y: 150 }, size: { x: 20, y: 20 }, velocity: {} };
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

    it('return false when the player is falling within the platform', () => {
      player2.velocity.y = 5;
      expect(collision.isCollidingOnTop(player2, platform)).toEqual(false);
    });
  });

  describe('isCollidingOnBottom', () => {
    it('returns false when player is below the body', () => {
      expect(collision.isCollidingOnBottom(player7, platform)).toEqual(false);
    });

    it('returns true when player collides bottom of body', () => {
      expect(collision.isCollidingOnBottom(player9, platform)).toEqual(true);
    });

    it('returns false when player is to left of body', () => {
      expect(collision.isCollidingOnBottom(player1, platform)).toEqual(false);
    });

    it('returns true when player colliding with bottom left corner of body', () => {
      expect(collision.isCollidingOnBottom(player10, platform)).toEqual(true);
    });

    it('returns false when player is to the right of body', () => {
      expect(collision.isCollidingOnBottom(player5, platform)).toEqual(false);
    });

    it('returns true when player colliding with bottom right corner of body', () => {
      expect(collision.isCollidingOnBottom(player11, platform)).toEqual(true);
    });

    it('returns false when player bottom is above platform bottom', () => {
      expect(collision.isCollidingOnBottom(player8, platform)).toEqual(false);
    });

    it('return false when the player is jumping within the platform', () => {
      player9.velocity.y = -5;
      expect(collision.isCollidingOnBottom(player9, platform)).toEqual(false);
    });
  });

  describe('isCollidingOnLeft', () => {
    it('returns false when player is to the left of body', () => {
      expect(collision.isCollidingOnLeft(player1, platform)).toEqual(false);
    });

    it('returns true when player colliding with left of body', () => {
      expect(collision.isCollidingOnLeft(player12, platform)).toEqual(true);
    });

    it('returns true when player colliing with top left corner of body', () => {
      expect(collision.isCollidingOnLeft(player2, platform)).toEqual(true);
    });

    it('returns true when player colliding with bottom left corner of body', () => {
      expect(collision.isCollidingOnLeft(player10, platform)).toEqual(true);
    });

    it('returns false when player is above the body', () => {
      expect(collision.isCollidingOnLeft(player6, platform)).toEqual(false);
    });

    it('returns false when player is below the body', () => {
      expect(collision.isCollidingOnLeft(player7, platform)).toEqual(false);
    });

    it('returns false when left of player is right of the body', () => {
      expect(collision.isCollidingOnLeft(player8, platform)).toEqual(false);
    });
  });

  describe('isCollidingOnRight', () => {
    it('returns false when player is to the right of the body', () => {
      expect(collision.isCollidingOnRight(player5, platform)).toEqual(false);
    });

    it('returns true when player is colliding on the right of the body', () => {
      expect(collision.isCollidingOnRight(player13, platform)).toEqual(true);
    });

    it('returns true when player is colliding on the top right of the body', () => {
      expect(collision.isCollidingOnRight(player4, platform)).toEqual(true);
    });

    it('returns true when player is colliding on the bottom right of the body', () => {
      expect(collision.isCollidingOnRight(player11, platform)).toEqual(true);
    });

    it('returns false when player is above the body', () => {
      expect(collision.isCollidingOnRight(player6, platform)).toEqual(false);
    });

    it('returns false when player is below the body', () => {
      expect(collision.isCollidingOnRight(player7, platform)).toEqual(false);
    });

    it('returns false when right of player is left of body', () => {
      expect(collision.isCollidingOnRight(player8, platform)).toEqual(false);
    });
  });

  describe('resolveCollisions', () => {
    beforeEach(() => {
      spyOn(platform, 'resolveCollision');
    });

    describe('ResolveBottomCollisions', () => {
      beforeEach(() => {
        spyOn(collision, 'isCollidingOnTop').and.returnValue(false);
        spyOn(collision, 'isCollidingOnLeft').and.returnValue(false);
        spyOn(collision, 'isCollidingOnRight').and.returnValue(false);
      });

      it('calls resolveBottomCollision on the player with first platform', () => {
        spyOn(collision, 'isCollidingOnBottom').and.returnValue(true);
        spyOn(player, 'resolveBottomCollision');
        collision.resolveCollisions(bodies);
        expect(player.resolveBottomCollision).toHaveBeenCalledWith(
          platform.center.y + platform.size.y / 2
        );
      });

      it('calls resolveBottomCollision on the player once per platform', () => {
        spyOn(collision, 'isCollidingOnBottom').and.returnValue(true);
        spyOn(player, 'resolveBottomCollision');
        collision.resolveCollisions(bodies);
        expect(player.resolveBottomCollision.calls.count()).toEqual(collision.otherBodies.length);
      });

      it('calls resolveBottomCollision on the player with other platform', () => {
        spyOn(collision, 'isCollidingOnBottom').and.returnValue(true);
        spyOn(player, 'resolveBottomCollision');
        collision.resolveCollisions(bodies);
        expect(player.resolveBottomCollision).toHaveBeenCalledWith(
          otherPlatform.center.y + otherPlatform.size.y / 2
        );
      });

      it('does not call resolveBottomCollision if isColliding is false', () => {
        spyOn(collision, 'isCollidingOnBottom').and.returnValue(false);
        spyOn(player, 'resolveBottomCollision');
        collision.resolveCollisions(bodies);
        expect(player.resolveBottomCollision.calls.count()).toEqual(0);
      });

      it('calls resolveBottomCollision with first body if it isColliding', () => {
        spyOn(collision, 'isCollidingOnBottom').and.returnValues(true, false);
        spyOn(player, 'resolveBottomCollision');
        collision.resolveCollisions(bodies);
        expect(player.resolveBottomCollision).toHaveBeenCalledWith(
          platform.center.y + platform.size.y / 2
        );
      });

      it('does not call resolveBottomCollision with first body if it isColliding', () => {
        spyOn(collision, 'isCollidingOnBottom').and.returnValues(false, true);
        spyOn(player, 'resolveBottomCollision');
        collision.resolveCollisions(bodies);
        expect(player.resolveBottomCollision).not.toHaveBeenCalledWith(
          platform.center.y + platform.size.y / 2
        );
      });

      it('calls resolveCollision with the first body if it isColliding', () => {
        spyOn(collision, 'isCollidingOnBottom').and.returnValue(true);
        spyOn(player, 'resolveBottomCollision');
        collision.resolveCollisions(bodies);
        expect(platform.resolveCollision).toHaveBeenCalled();
      });
    });

    describe('resolveTopCollision', () => {
      beforeEach(() => {
        spyOn(collision, 'isCollidingOnBottom').and.returnValue(false);
        spyOn(collision, 'isCollidingOnLeft').and.returnValue(false);
        spyOn(collision, 'isCollidingOnRight').and.returnValue(false);
      });

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

      it('calls resolveCollision with the first body if it isColliding', () => {
        spyOn(collision, 'isCollidingOnTop').and.returnValue(true);
        spyOn(player, 'resolveTopCollision');
        collision.resolveCollisions(bodies);
        expect(platform.resolveCollision).toHaveBeenCalled();
      });
    });

    describe('resolveLeftCollision', () => {
      beforeEach(() => {
        spyOn(collision, 'isCollidingOnBottom').and.returnValue(false);
        spyOn(collision, 'isCollidingOnTop').and.returnValue(false);
        spyOn(collision, 'isCollidingOnRight').and.returnValue(false);
      });

      it('calls resolveLeftCollision on the player with first platform', () => {
        spyOn(collision, 'isCollidingOnLeft').and.returnValue(true);
        spyOn(player, 'resolveLeftCollision');
        collision.resolveCollisions(bodies);
        expect(player.resolveLeftCollision).toHaveBeenCalledWith(
          platform.center.x - platform.size.x / 2
        );
      });

      it('calls resolveLeftCollision on the player once per platform', () => {
        spyOn(collision, 'isCollidingOnLeft').and.returnValue(true);
        spyOn(player, 'resolveLeftCollision');
        collision.resolveCollisions(bodies);
        expect(player.resolveLeftCollision.calls.count()).toEqual(collision.otherBodies.length);
      });

      it('calls resolveLeftCollision on the player with other platform', () => {
        spyOn(collision, 'isCollidingOnLeft').and.returnValue(true);
        spyOn(player, 'resolveLeftCollision');
        collision.resolveCollisions(bodies);
        expect(player.resolveLeftCollision).toHaveBeenCalledWith(
          otherPlatform.center.x - otherPlatform.size.x / 2
        );
      });

      it('does not call resolveLeftCollision if isColliding is false', () => {
        spyOn(collision, 'isCollidingOnLeft').and.returnValue(false);
        spyOn(player, 'resolveLeftCollision');
        collision.resolveCollisions(bodies);
        expect(player.resolveLeftCollision.calls.count()).toEqual(0);
      });

      it('calls resolveLeftCollision with first body if it isColliding', () => {
        spyOn(collision, 'isCollidingOnLeft').and.returnValues(true, false);
        spyOn(player, 'resolveLeftCollision');
        collision.resolveCollisions(bodies);
        expect(player.resolveLeftCollision).toHaveBeenCalledWith(
          platform.center.x - platform.size.x / 2
        );
      });

      it('does not call resolveLeftCollision with first body if it isColliding', () => {
        spyOn(collision, 'isCollidingOnLeft').and.returnValues(false, true);
        spyOn(player, 'resolveLeftCollision');
        collision.resolveCollisions(bodies);
        expect(player.resolveLeftCollision).not.toHaveBeenCalledWith(
          platform.center.x - platform.size.x / 2
        );
      });

      it('calls resolveCollision with the first body if it isColliding', () => {
        spyOn(collision, 'isCollidingOnLeft').and.returnValue(true);
        spyOn(player, 'resolveLeftCollision');
        collision.resolveCollisions(bodies);
        expect(platform.resolveCollision).toHaveBeenCalled();
      });
    });

    describe('resolveRightCollision', () => {
      beforeEach(() => {
        spyOn(collision, 'isCollidingOnBottom').and.returnValue(false);
        spyOn(collision, 'isCollidingOnTop').and.returnValue(false);
        spyOn(collision, 'isCollidingOnLeft').and.returnValue(false);
      });

      it('calls resolveRightCollision on the player with first platform', () => {
        spyOn(collision, 'isCollidingOnRight').and.returnValue(true);
        spyOn(player, 'resolveRightCollision');
        collision.resolveCollisions(bodies);
        expect(player.resolveRightCollision).toHaveBeenCalledWith(
          platform.center.x + platform.size.x / 2
        );
      });

      it('calls resolveRightCollision on the player once per platform', () => {
        spyOn(collision, 'isCollidingOnRight').and.returnValue(true);
        spyOn(player, 'resolveRightCollision');
        collision.resolveCollisions(bodies);
        expect(player.resolveRightCollision.calls.count()).toEqual(collision.otherBodies.length);
      });

      it('calls resolveRightCollision on the player with other platform', () => {
        spyOn(collision, 'isCollidingOnRight').and.returnValue(true);
        spyOn(player, 'resolveRightCollision');
        collision.resolveCollisions(bodies);
        expect(player.resolveRightCollision).toHaveBeenCalledWith(
          otherPlatform.center.x + otherPlatform.size.x / 2
        );
      });

      it('does not call resolveRightCollision if isColliding is false', () => {
        spyOn(collision, 'isCollidingOnRight').and.returnValue(false);
        spyOn(player, 'resolveRightCollision');
        collision.resolveCollisions(bodies);
        expect(player.resolveRightCollision.calls.count()).toEqual(0);
      });

      it('calls resolveRightCollision with first body if it isColliding', () => {
        spyOn(collision, 'isCollidingOnRight').and.returnValues(true, false);
        spyOn(player, 'resolveRightCollision');
        collision.resolveCollisions(bodies);
        expect(player.resolveRightCollision).toHaveBeenCalledWith(
          platform.center.x + platform.size.x / 2
        );
      });

      it('does not call resolveRightCollision with first body if it isColliding', () => {
        spyOn(collision, 'isCollidingOnRight').and.returnValues(false, true);
        spyOn(player, 'resolveRightCollision');
        collision.resolveCollisions(bodies);
        expect(player.resolveRightCollision).not.toHaveBeenCalledWith(
          platform.center.x + platform.size.x / 2
        );
      });

      it('calls resolveCollision with the first body if it isColliding', () => {
        spyOn(collision, 'isCollidingOnRight').and.returnValue(true);
        spyOn(player, 'resolveRightCollision');
        collision.resolveCollisions(bodies);
        expect(platform.resolveCollision).toHaveBeenCalled();
      });
    });
  });
});
