describe('Player', () => {
  let player, context, keyboarder;

  beforeEach(() => {
    keyboarder = { isRightKeyDown() {}, isLeftKeyDown() {} };
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
    it('player can move right when right key is pressed', () => {
      spyOn(keyboarder, 'isRightKeyDown').and.returnValue(true);
      player.update();
      expect(player.velocity.x).toEqual(1.5);
    });

    it('player cannot move right when right key is  not pressed', () => {
      spyOn(keyboarder, 'isRightKeyDown').and.returnValue(false);
      player.update();
      expect(player.velocity.x).toEqual(0);
    });

    it('player can move left when left key is pressed', () => {
      spyOn(keyboarder, 'isLeftKeyDown').and.returnValue(true);
      player.update();
      expect(player.velocity.x).toEqual(-1.5);
    });

    it('player cannot move left when right key is  not pressed', () => {
      spyOn(keyboarder, 'isLeftKeyDown').and.returnValue(false);
      player.update();
      expect(player.velocity.x).toEqual(0);
    });
  });
});
