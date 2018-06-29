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

  fdescribe('resolveTopCollision', () => {
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
  });

  describe('Update', () => {
    describe('RightKey', () => {
      it('player moves when right key is pressed', () => {
        spyOn(keyboarder, 'isRightKeyDown').and.returnValue(true);
        player.update();
        expect(player.center.x).toEqual(initialXCenter + player.movement.x);
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
        expect(player.center.x).toEqual(initialXCenter + (player.movement.x * 2));
      });

      it('player only moves once if right key is released', () => {
        spyOn(keyboarder, 'isRightKeyDown').and.returnValues(true, false);
        player.update();
        player.update();
        expect(player.center.x).toEqual(initialXCenter + player.movement.x);
      });
    });

    describe('LeftKey', () => {
      it('player moves when left key is pressed', () => {
        spyOn(keyboarder, 'isLeftKeyDown').and.returnValue(true);
        player.update();
        expect(player.center.x).toEqual(initialXCenter - player.movement.x);
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
        expect(player.center.x).toEqual(initialXCenter - (player.movement.x * 2));
      });

      it('player only moves once if left key is released', () => {
        spyOn(keyboarder, 'isLeftKeyDown').and.returnValues(true, false);
        player.update();
        player.update();
        expect(player.center.x).toEqual(initialXCenter - player.movement.x);
      });
    });

    describe('UpKey', () => {
      it('player moves when up key is pressed', () => {
        spyOn(keyboarder, 'isUpKeyDown').and.returnValue(true);
        player.update();
        expect(player.center.y).toEqual(initialYCenter + player.movement.y);
      });

      it('player does not move if up key is not pressed', () => {
        spyOn(keyboarder, 'isUpKeyDown').and.returnValue(false);
        player.update();
        expect(player.center.y).toEqual(initialYCenter);
      });

      it('player only moves once if up key is released', () => {
        spyOn(keyboarder, 'isUpKeyDown').and.returnValues(true, false);
        player.update();
        player.update();
        expect(player.center.y).toEqual(initialYCenter += player.movement.y);
      });
    });
  });
});
