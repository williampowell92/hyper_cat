describe('Player', () => {
  let player;
  let context;
  let keyboarder;
  let initialXCenter;
  let initialYCenter;
  let sprite;
  let animation;
  let animationFactory;

  beforeEach(() => {
    keyboarder = { isRightKeyDown() {}, isLeftKeyDown() {}, isUpKeyDown() {} };
    sprite = { sheetWidth: 900, columns: 10, img: {} };
    animation = { frameX: 0, sprite, repositionFrame() {}, draw() {} };
    spyOn(animation, 'repositionFrame');
    spyOn(animation, 'draw');
    animationFactory = { build() {} };
    spyOn(animationFactory, 'build').and.returnValue(animation);
    player = new Player(keyboarder, animationFactory);
    context = jasmine.createSpyObj('context', ['drawImage']);
    initialXCenter = player.center.x;
    initialYCenter = player.center.y;
  });

  describe('Draw', () => {
    it('calls draw on animation', () => {
      const gameSize = { x: 800, y: 800 };
      player.draw(context, undefined, gameSize);
      expect(animation.draw).toHaveBeenCalledWith(
        context,
        gameSize,
        player.center,
        player.size
      );
    });

    it('calls repositionFrame on animation', () => {
      const gameSize = { x: 800, y: 800 };
      player.draw(context, undefined, gameSize);
      expect(animation.repositionFrame).toHaveBeenCalled();
    });
  });

  describe('resolveTopCollision', () => {
    it('stops the player falling', () => {
      player.update();
      player.resolveTopCollision(initialYCenter + player.size.y / 2);
      expect(player.center.y).toEqual(initialYCenter);
    });

    it('sets jumping status to false', () => {
      player.jumping = true;
      player.update();
      player.resolveTopCollision(initialYCenter + player.size.y / 2);
      expect(player.jumping).toEqual(false);
    });

    it('sets y velocity to 0', () => {
      player.update();
      player.resolveTopCollision(initialYCenter + player.size.y / 2);
      expect(player.velocity.y).toEqual(0);
    });
  });

  describe('resolveBottomCollision', () => {
    it('stops the player jumping through platform', () => {
      spyOn(keyboarder, 'isUpKeyDown').and.returnValue(true);
      player.jumping = false;
      player.update();
      player.resolveBottomCollision(initialYCenter - player.size.y / 2);
      expect(player.center.y).toEqual(initialYCenter);
    });

    it('sets y velocity to 0', () => {
      spyOn(keyboarder, 'isUpKeyDown').and.returnValue(true);
      player.jumping = false;
      player.update();
      player.resolveBottomCollision(initialYCenter - player.size.y / 2);
      expect(player.velocity.y).toEqual(0);
    });
  });

  describe('resolveLeftCollision', () => {
    it('stops the player moving through platform', () => {
      spyOn(keyboarder, 'isRightKeyDown').and.returnValue(true);
      player.update();
      player.resolveLeftCollision(initialXCenter + player.size.x / 2);
      expect(player.center.x).toEqual(initialXCenter);
    });

    it('sets x velocity to 0', () => {
      spyOn(keyboarder, 'isRightKeyDown').and.returnValue(true);
      player.update();
      player.resolveLeftCollision(initialXCenter + player.size.x / 2);
      expect(player.velocity.x).toEqual(0);
    });
  });

  describe('resolveRightCollision', () => {
    it('stops the player moving through platform', () => {
      spyOn(keyboarder, 'isLeftKeyDown').and.returnValue(true);
      player.update();
      player.resolveRightCollision(initialXCenter - player.size.x / 2);
      expect(player.center.x).toEqual(initialXCenter);
    });

    it('sets x velocity to 0', () => {
      spyOn(keyboarder, 'isLeftKeyDown').and.returnValue(true);
      player.update();
      player.resolveRightCollision(initialXCenter - player.size.x / 2);
      expect(player.velocity.x).toEqual(0);
    });
  });

  describe('Update', () => {
    describe('RightKey', () => {
      it('player moves when right key is pressed', () => {
        spyOn(keyboarder, 'isRightKeyDown').and.returnValue(true);
        player.update();
        expect(player.center.x).toEqual(initialXCenter + player.acceleration.x * player.friction);
      });

      it('player does not move if right key is not pressed', () => {
        spyOn(keyboarder, 'isRightKeyDown').and.returnValue(false);
        player.update();
        expect(player.center.x).toEqual(initialXCenter);
      });

      it('player keeps moving if right key is held', () => {
        spyOn(keyboarder, 'isRightKeyDown').and.returnValue(true);
        player.update();
        player.update();
        expect(Math.round(player.center.x * 1000) / 1000).toEqual(
          initialXCenter + player.friction * (player.acceleration.x * (2 + player.friction))
        );
      });

      it('player begins sliding if right key is released', () => {
        spyOn(keyboarder, 'isRightKeyDown').and.returnValues(true, false);
        player.update();
        player.update();
        expect(player.center.x).toEqual(
          initialXCenter + (player.acceleration.x * player.friction) * (1 + player.friction)
        );
      });
    });

    describe('LeftKey', () => {
      it('player moves when left key is pressed', () => {
        spyOn(keyboarder, 'isLeftKeyDown').and.returnValue(true);
        player.update();
        expect(player.center.x).toEqual(initialXCenter - player.acceleration.x * player.friction);
      });

      it('player does not move if left key is not pressed', () => {
        spyOn(keyboarder, 'isLeftKeyDown').and.returnValue(false);
        player.update();
        expect(player.center.x).toEqual(initialXCenter);
      });

      it('player keeps moving if left key is held', () => {
        spyOn(keyboarder, 'isLeftKeyDown').and.returnValue(true);
        player.update();
        player.update();
        expect(Math.round(player.center.x * 1000) / 1000).toEqual(
          initialXCenter - player.friction * (player.acceleration.x * (2 + player.friction))
        );
      });

      it('player begins sliding if left key is released', () => {
        spyOn(keyboarder, 'isLeftKeyDown').and.returnValues(true, false);
        player.update();
        player.update();
        expect(player.center.x).toEqual(
          initialXCenter - (player.acceleration.x * player.friction) * (1 + player.friction)
        );
      });
    });

    describe('UpKey', () => {
      it('player moves when up key is pressed', () => {
        player.jumping = false;
        spyOn(keyboarder, 'isUpKeyDown').and.returnValue(true);
        player.update();
        expect(player.center.y).toEqual(initialYCenter + player.acceleration.y);
      });

      it('player does not move if up key is not pressed', () => {
        spyOn(keyboarder, 'isUpKeyDown').and.returnValue(false);
        player.update();
        player.resolveTopCollision(initialYCenter + player.size.y / 2);
        expect(player.center.y).toEqual(initialYCenter);
      });

      it('player continues to ascend in second update after jump', () => {
        player.jumping = false;
        spyOn(keyboarder, 'isUpKeyDown').and.returnValue(true);
        player.update();
        player.update();
        expect(player.center.y).toEqual(
          initialYCenter + 2 * player.acceleration.y + player.gravity
        );
      });
    });
  });
});
