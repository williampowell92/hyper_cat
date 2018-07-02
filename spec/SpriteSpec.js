describe('Sprite', () => {
  let sprite;
  let imageFactory;
  let spriteFactory;

  const sheets = {
    idle: { width: 900, columns: 10, src: 'public/assets/sprite_idle.png' }
  };

  beforeEach(() => {
    imageFactory = new ImageFactory();
    spyOn(imageFactory, 'build').and.returnValue({});
    spriteFactory = new SpriteFactory();
    sprite = spriteFactory.build('idle', imageFactory);
  });

  describe('initialize', () => {
    it('stores the sheetWidth', () => {
      expect(sprite.sheetWidth).toEqual(sheets.idle.width);
    });

    it('stores the columns', () => {
      expect(sprite.columns).toEqual(sheets.idle.columns);
    });

    it('adds the src to the image', () => {
      expect(sprite.img.src).toContain(sheets.idle.src.slice(2, -1));
    });
  });
});
