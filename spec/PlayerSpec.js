describe('Player', () => {
  let player;
  let context;
  let keyboarder;
  let initialXCenter;
  let initialYCenter;

  beforeEach(() => {
    keyboarder = { isRightKeyDown() {}, isLeftKeyDown() {}, isUpKeyDown() {} };
    player = new Player(keyboarder);
    context = jasmine.createSpyObj('context', ['fillRect']);
    initialXCenter = player.center.x;
    initialYCenter = player.center.y;
  });

  describe('Draw', () => {
    it('fills a rectange with players dimension', () => {
      player.draw(context);
      expect(context.fillRect).toHaveBeenCalledWith(
        player.center.x - (player.size.x / 2),
        player.center.y - (player.size.y / 2),
        player.size.x, player.size.y
      );
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
      player.update();
      player.resolveBottomCollision(initialYCenter - player.size.y / 2);
      expect(player.center.y).toEqual(initialYCenter);
    });

    // it('sets jumping status to false', () => {
    //   player.jumping = true;
    //   player.update();
    //   player.resolveTopCollision(initialYCenter + player.size.y / 2);
    //   expect(player.jumping).toEqual(false);
    // });

    it('sets y velocity to 0', () => {
      player.update();
      player.resolveBottomCollision(initialYCenter - player.size.y / 2);
      expect(player.velocity.y).toEqual(0);
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
