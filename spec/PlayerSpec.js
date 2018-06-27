describe('Player', () => {
  let player, context, keyboarder;

  beforeEach(() => {
    keyboarder = { isRightKeyDown() {}, isLeftKeyDown() {}, isUpKeyDown() {} };
    player = new Player(keyboarder);
    context = { fillRect() {} };
  });

  describe('Draw', () => {
    it('fills a rectange with players dimension', () => {
      spyOn(context, 'fillRect');
      player.draw(context);
      expect(context.fillRect).toHaveBeenCalledWith(player.center.x - (player.size.x / 2),
        player.center.y - (player.size.y / 2),
        player.size.x, player.size.y);
    });
  });

  describe('Update', () => {
    describe('RightKey', () => {
      it('players velocity increases when right key is pressed', () => {
        spyOn(keyboarder, 'isRightKeyDown').and.returnValue(true);
        player.update();
        expect(player.velocity.x).toEqual(player.movement.x);
      });

      it('player velocity does not increase if right key is  not pressed', () => {
        spyOn(keyboarder, 'isRightKeyDown').and.returnValue(false);
        player.update();
        expect(player.velocity.x).toEqual(0);
      });

      it('player moves when right key is pressed', () => {
        spyOn(keyboarder, 'isRightKeyDown').and.returnValue(true);
        const initialXCenter = player.center.x;
        player.update();
        expect(player.center.x).toEqual(initialXCenter + player.movement.x);
      });

      it('player moves when right key is pressed', () => {
        spyOn(keyboarder, 'isRightKeyDown').and.returnValue(false);
        const initialXCenter = player.center.x;
        player.update();
        expect(player.center.x).toEqual(initialXCenter);
      });
    });
    it('player velocity increases when left key is pressed', () => {
      spyOn(keyboarder, 'isLeftKeyDown').and.returnValue(true);
      player.update();
      expect(player.velocity.x).toEqual(-player.movement.x);
    });

    it('player velocity does not increase if left key is  not pressed', () => {
      spyOn(keyboarder, 'isLeftKeyDown').and.returnValue(false);
      player.update();
      expect(player.velocity.x).toEqual(0);
    });

    it('player velocity increases when up key is pressed', () => {
      spyOn(keyboarder, 'isUpKeyDown').and.returnValue(true);
      player.update();
      expect(player.velocity.y).toEqual(player.movement.y);
    });

    it('player velocity does not increase if the up key is not pressed', () => {
      spyOn(keyboarder, 'isUpKeyDown').and.returnValue(false);
      player.update();
      expect(player.velocity.y).toEqual(0);
    });

  });
});
