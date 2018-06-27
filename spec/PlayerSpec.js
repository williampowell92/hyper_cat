describe('Player', () => {
  let player, context;

  beforeEach(() => {
    player = new Player();
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
});
