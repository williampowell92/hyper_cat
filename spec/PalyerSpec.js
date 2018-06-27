describe('Player', () => {
  let player, context;

  beforeEach(() => {
    player = new Player();
    context = { fillRect() {} };
  });

  describe('Draw', () => {
    it('fills a rectange', () => {
      spyOn(context, 'fillRect');
      player.draw(context);
      expect(context.fillRect).toHaveBeenCalled();
    });
  });
});
