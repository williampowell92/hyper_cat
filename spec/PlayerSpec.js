describe('Player', () => {
  let player;
  let context;
  let keyboarder;
  let initialXCenter;
  let initialYCenter;
  let sprite;
  let animation;
  let rightAnimation;
  let leftAnimation;
  let animationFactory;
  let gameSize;

  beforeEach(() => {
    keyboarder = { isRightKeyDown() {}, isLeftKeyDown() {}, isUpKeyDown() {} };
    sprite = { sheetWidth: 900, columns: 10, img: {} };
    animation = {
      frameX: 0, type: 'idle', sprite, repositionFrame() {}, draw() {}
    };
    rightAnimation = {
      frameX: 0, type: 'right', sprite, repositionFrame() {}, draw() {}
    };
    leftAnimation = {
      frameX: 0, type: 'left', sprite, repositionFrame() {}, draw() {}
    };
    spyOn(animation, 'repositionFrame');
    spyOn(animation, 'draw');
    animationFactory = { build() {} };
    spyOn(animationFactory, 'build').and.returnValues(animation, rightAnimation, leftAnimation);
    player = new Player(keyboarder, animationFactory);
    context = jasmine.createSpyObj('context', ['drawImage']);
    initialXCenter = player.center.x;
    initialYCenter = player.center.y;
    gameSize = { x: 800, y: 800 };
  });

  describe('initialize', () => {
    it('adds idle animation to animations array', () => {
      expect(player.animations.idle).toEqual(animation);
    });

    it('adds right animation to animations array', () => {
      expect(player.animations.right).toEqual(rightAnimation);
    });

    it('adds left animation to animations array', () => {
      expect(player.animations.left).toEqual(leftAnimation);
    });
  });

  describe('Draw', () => {
    it('calls draw on currentAnimation', () => {
      player.draw(context, undefined, gameSize);
      expect(animation.draw).toHaveBeenCalledWith(
        context,
        gameSize,
        player.center,
        player.size
      );
    });

    it('calls repositionFrame on currentAnimation', () => {
      player.draw(context, undefined, gameSize);
      expect(animation.repositionFrame).toHaveBeenCalled();
    });
  });

  describe('resolveTopCollision', () => {
    it('stops the player falling', () => {
      player.update(gameSize);
      player.resolveTopCollision(initialYCenter + player.size.y / 2);
      expect(player.center.y).toEqual(initialYCenter);
    });

    it('sets jumping status to false', () => {
      player.jumping = true;
      player.update(gameSize);
      player.resolveTopCollision(initialYCenter + player.size.y / 2);
      expect(player.jumping).toEqual(false);
    });

    it('sets y velocity to 0', () => {
      player.update(gameSize);
      player.resolveTopCollision(initialYCenter + player.size.y / 2);
      expect(player.velocity.y).toEqual(0);
    });
  });

  describe('resolveBottomCollision', () => {
    it('stops the player jumping through platform', () => {
      spyOn(keyboarder, 'isUpKeyDown').and.returnValue(true);
      player.jumping = false;
      player.update(gameSize);
      player.resolveBottomCollision(initialYCenter - player.size.y / 2);
      expect(player.center.y).toEqual(initialYCenter);
    });

    it('sets y velocity to 0', () => {
      spyOn(keyboarder, 'isUpKeyDown').and.returnValue(true);
      player.jumping = false;
      player.update(gameSize);
      player.resolveBottomCollision(initialYCenter - player.size.y / 2);
      expect(player.velocity.y).toEqual(0);
    });
  });

  describe('resolveLeftCollision', () => {
    it('stops the player moving through platform', () => {
      spyOn(keyboarder, 'isRightKeyDown').and.returnValue(true);
      player.update(gameSize);
      player.resolveLeftCollision(initialXCenter + player.size.x / 2);
      expect(player.center.x).toEqual(initialXCenter);
    });

    it('sets x velocity to 0', () => {
      spyOn(keyboarder, 'isRightKeyDown').and.returnValue(true);
      player.update(gameSize);
      player.resolveLeftCollision(initialXCenter + player.size.x / 2);
      expect(player.velocity.x).toEqual(0);
    });
  });

  describe('resolveRightCollision', () => {
    it('stops the player moving through platform', () => {
      spyOn(keyboarder, 'isLeftKeyDown').and.returnValue(true);
      player.update(gameSize);
      player.resolveRightCollision(initialXCenter - player.size.x / 2);
      expect(player.center.x).toEqual(initialXCenter);
    });

    it('sets x velocity to 0', () => {
      spyOn(keyboarder, 'isLeftKeyDown').and.returnValue(true);
      player.update(gameSize);
      player.resolveRightCollision(initialXCenter - player.size.x / 2);
      expect(player.velocity.x).toEqual(0);
    });
  });

  describe('Update', () => {
    describe('RightKey', () => {
      it('player moves when right key is pressed', () => {
        spyOn(keyboarder, 'isRightKeyDown').and.returnValue(true);
        player.update(gameSize);
        expect(player.center.x).toEqual(initialXCenter + player.acceleration.x * player.friction);
      });

      it('player does not move if right key is not pressed', () => {
        spyOn(keyboarder, 'isRightKeyDown').and.returnValue(false);
        player.update(gameSize);
        expect(player.center.x).toEqual(initialXCenter);
      });

      it('player keeps moving if right key is held', () => {
        spyOn(keyboarder, 'isRightKeyDown').and.returnValue(true);
        player.update(gameSize);
        player.update(gameSize);
        expect(Math.round(player.center.x * 1000) / 1000).toEqual(
          initialXCenter + player.friction * (player.acceleration.x * (2 + player.friction))
        );
      });

      it('player begins sliding if right key is released', () => {
        spyOn(keyboarder, 'isRightKeyDown').and.returnValues(true, false);
        player.update(gameSize);
        player.update(gameSize);
        expect(player.center.x).toEqual(
          initialXCenter + (player.acceleration.x * player.friction) * (1 + player.friction)
        );
      });

      it('updates player animation to right when right key is pressed', () => {
        spyOn(keyboarder, 'isRightKeyDown').and.returnValue(true);
        player.update(gameSize);
        expect(player.currentAnimation).toEqual(rightAnimation);
      });

      it('updates player animation back to idle when right key is released', () => {
        spyOn(keyboarder, 'isRightKeyDown').and.returnValues(true, true, false, false);
        player.update(gameSize);
        player.update(gameSize);
        expect(player.currentAnimation.type).toEqual('idle');
      });
    });

    describe('LeftKey', () => {
      it('player moves when left key is pressed', () => {
        spyOn(keyboarder, 'isLeftKeyDown').and.returnValue(true);
        player.update(gameSize);
        expect(player.center.x).toEqual(initialXCenter - player.acceleration.x * player.friction);
      });

      it('player does not move if left key is not pressed', () => {
        spyOn(keyboarder, 'isLeftKeyDown').and.returnValue(false);
        player.update(gameSize);
        expect(player.center.x).toEqual(initialXCenter);
      });

      it('player keeps moving if left key is held', () => {
        spyOn(keyboarder, 'isLeftKeyDown').and.returnValue(true);
        player.update(gameSize);
        player.update(gameSize);
        expect(Math.round(player.center.x * 1000) / 1000).toEqual(
          initialXCenter - player.friction * (player.acceleration.x * (2 + player.friction))
        );
      });

      it('player begins sliding if left key is released', () => {
        spyOn(keyboarder, 'isLeftKeyDown').and.returnValues(true, false);
        player.update(gameSize);
        player.update(gameSize);
        expect(player.center.x).toEqual(
          initialXCenter - (player.acceleration.x * player.friction) * (1 + player.friction)
        );
      });

      it('updates player animation to left when left key is pressed', () => {
        spyOn(keyboarder, 'isLeftKeyDown').and.returnValue(true);
        player.update(gameSize);
        expect(player.currentAnimation).toEqual(leftAnimation);
      });

      it('updates player animation back to idle when left key is released', () => {
        spyOn(keyboarder, 'isLeftKeyDown').and.returnValues(true, true, false, false);
        player.update(gameSize);
        player.update(gameSize);
        expect(player.currentAnimation.type).toEqual('idle');
      });
    });

    describe('UpKey', () => {
      it('player moves when up key is pressed', () => {
        player.jumping = false;
        spyOn(keyboarder, 'isUpKeyDown').and.returnValue(true);
        player.update(gameSize);
        expect(player.center.y).toEqual(initialYCenter + player.acceleration.y);
      });

      it('player does not move if up key is not pressed', () => {
        spyOn(keyboarder, 'isUpKeyDown').and.returnValue(false);
        player.update(gameSize);
        player.resolveTopCollision(initialYCenter + player.size.y / 2);
        expect(player.center.y).toEqual(initialYCenter);
      });

      it('player continues to ascend in second update after jump', () => {
        player.jumping = false;
        spyOn(keyboarder, 'isUpKeyDown').and.returnValue(true);
        player.update(gameSize);
        player.update(gameSize);
        expect(player.center.y).toEqual(
          initialYCenter + 2 * player.acceleration.y + player.gravity
        );
      });

      it('player cannot jump after walking off platform', () => {
        player.update(gameSize);
        player.resolveTopCollision(initialYCenter + player.size.y / 2);
        player.update(gameSize);
        spyOn(keyboarder, 'isUpKeyDown').and.returnValue(true);
        player.update(gameSize);
        expect(player.center.y).toEqual(initialYCenter + 3 * player.gravity);
      });
    });
    describe('_checkYPosition', () => {
      it('ends the game if the player drops off the screen', () => {
        spyOn(player, '_loseScreen');
        player.center.y = 799;
        player.update(gameSize);
        expect(player._loseScreen).toHaveBeenCalled();
      });
    });
  });
});
