describe('Player', () => {
  let player;
  let context;
  let keyboarder;

  beforeEach(() => {
    keyboarder = { isRightKeyDown() {}, isLeftKeyDown() {}, isUpKeyDown() {} };
    player = new Player(keyboarder);
    context = jasmine.createSpyObj('context', ['fillRect']);
  });

  describe('Draw', () => {
    it('fills a rectange with players dimension', () => {
      player.draw(context);
      expect(context.fillRect).toHaveBeenCalledWith(player.center.x - (player.size.x / 2),
        player.center.y - (player.size.y / 2),
        player.size.x, player.size.y);
    });
  });

  describe('Update', () => {
    let initialXCenter;
    let initialYCenter;

    beforeEach(() => {
      initialXCenter = player.center.x;
      initialYCenter = player.center.y;
    });

    describe('RightKey', () => {
      it('player moves when right key is pressed', () => {
        spyOn(keyboarder, 'isRightKeyDown').and.returnValue(true);
        player.update();
        expect(player.center.x).toEqual(initialXCenter + player.speed.x);
      });

      it('player moves when right key is pressed', () => {
        spyOn(keyboarder, 'isRightKeyDown').and.returnValue(false);
        player.update();
        expect(player.center.x).toEqual(initialXCenter);
      });

      it('player moves when right key is pressed', () => {
        spyOn(keyboarder, 'isRightKeyDown').and.returnValue(true);
        player.update();
        player.update();
        expect(player.center.x).toEqual(initialXCenter + (player.speed.x * 2));
      });

      it('player moves when right key is pressed', () => {
        spyOn(keyboarder, 'isRightKeyDown').and.returnValue(true);
        player.update();
        player.update();
        expect(player.center.x).toEqual(initialXCenter + (player.speed.x * 2));
      });

      it('only moves once if right key is released', () => {
        spyOn(keyboarder, 'isRightKeyDown').and.returnValues(true, false);
        player.update();
        player.update();
        expect(player.center.x).toEqual(initialXCenter + player.speed.x);
      });
    });

    describe('LeftKey', () => {
      it('player moves when left key is pressed', () => {
        spyOn(keyboarder, 'isLeftKeyDown').and.returnValue(true);
        player.update();
        expect(player.center.x).toEqual(initialXCenter - player.speed.x);
      });

      it('player does not moe moves when left key not pressed twice', () => {
        spyOn(keyboarder, 'isLeftKeyDown').and.returnValue(false);
        player.update();
        expect(player.center.x).toEqual(initialXCenter);
      });

      it('player moves when left key is pressed twice', () => {
        spyOn(keyboarder, 'isLeftKeyDown').and.returnValue(true);
        player.update();
        player.update();
        expect(player.center.x).toEqual(initialXCenter - (player.speed.x * 2));
      });

      it('only moves once if left key is released', () => {
        spyOn(keyboarder, 'isLeftKeyDown').and.returnValues(true, false);
        player.update();
        player.update();
        expect(player.center.x).toEqual(initialXCenter - player.speed.x);
      });
    });

    describe('UpKey', () => {
      it('player moves when up key is pressed', () => {
        spyOn(keyboarder, 'isUpKeyDown').and.returnValue(true);
        player.update();
        expect(player.center.y).toEqual(initialYCenter + player.speed.y);
      });

      it('player moves when up key is pressed', () => {
        spyOn(keyboarder, 'isUpKeyDown').and.returnValue(false);
        player.update();
        expect(player.center.y).toEqual(initialYCenter);
      });

      it('only moves once if up key is released', () => {
        spyOn(keyboarder, 'isUpKeyDown').and.returnValues(true, false);
        player.update();
        player.update();
        expect(player.center.y).toEqual(initialYCenter + player.speed.y);
      });
    });
  });
});
