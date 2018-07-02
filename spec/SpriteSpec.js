describe('Sprite', () => {
  let sprite;
  let sheetWidth;
  let columns;
  let src;
  let imageFactory;
  let spriteFactory;

  beforeEach(() => {
    sheetWidth = 900;
    columns = 10;
    src = '../assets/sprite_idle.png';
    imageFactory = new ImageFactory();
    spyOn(imageFactory, 'build').and.returnValue({});
    spriteFactory = new SpriteFactory;
    sprite = spriteFactory.build(sheetWidth, columns, src, imageFactory);
  });

  describe('initialize', () => {
    it('stores the sheetWidth', () => {
      expect(sprite.sheetWidth).toEqual(sheetWidth);
    });

    it('stores the columns', () => {
      expect(sprite.columns).toEqual(columns);
    });

    it('adds the src to the image', () => {
      expect(sprite.img.src).toContain(src.slice(2, -1));
    });
  });
});
