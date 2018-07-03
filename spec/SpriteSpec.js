describe('Sprite', () => {
  let sprite;
  let imageFactory;
  let spriteFactory;

  const sheets = {
    idle: {
      width: 900,
      columns: 10,
      src: 'public/assets/sprite_idle.png',
      posOffsetX: 18,
      posOffsetY: 5,
      clippedWidth: 48,
      clippedHeight: 72
    },
    right: {
      width: 517,
      columns: 8,
      src: 'public/assets/sprite_running_right.png',
      posOffsetX: 5,
      posOffsetY: 0,
      clippedWidth: 56,
      clippedHeight: 78
    },
    left: {
      width: 517,
      columns: 8,
      src: 'public/assets/sprite_running_left.png',
      posOffsetX: 4,
      posOffsetY: 0,
      clippedWidth: 56,
      clippedHeight: 78
    }
  };

  beforeEach(() => {
    imageFactory = new ImageFactory();
    spyOn(imageFactory, 'build').and.returnValue({});
    spriteFactory = new SpriteFactory();
  });

  describe('initialize', () => {
    describe('idle', () => {
      beforeEach(() => {
        sprite = spriteFactory.build('idle', imageFactory);
      });

      it('stores the sheetWidth', () => {
        expect(sprite.sheetWidth).toEqual(sheets.idle.width);
      });

      it('stores the columns', () => {
        expect(sprite.columns).toEqual(sheets.idle.columns);
      });

      it('stores the src on the image', () => {
        expect(sprite.img.src).toContain(sheets.idle.src.slice(2, -1));
      });

      it('stores the posOffsetX', () => {
        expect(sprite.posOffsetX).toEqual(sheets.idle.posOffsetX);
      });

      it('stores the posOffsetY', () => {
        expect(sprite.posOffsetY).toEqual(sheets.idle.posOffsetY);
      });

      it('stores the clippedWidth', () => {
        expect(sprite.clippedWidth).toEqual(sheets.idle.clippedWidth);
      });

      it('stores the clippedHeight', () => {
        expect(sprite.clippedHeight).toEqual(sheets.idle.clippedHeight);
      });
    });

    describe('right', () => {
      beforeEach(() => {
        sprite = spriteFactory.build('right', imageFactory);
      });

      it('stores the sheetWidth', () => {
        expect(sprite.sheetWidth).toEqual(sheets.right.width);
      });

      it('stores the columns', () => {
        expect(sprite.columns).toEqual(sheets.right.columns);
      });

      it('stores the src on the image', () => {
        expect(sprite.img.src).toContain(sheets.right.src.slice(2, -1));
      });

      it('stores the posOffsetX', () => {
        expect(sprite.posOffsetX).toEqual(sheets.right.posOffsetX);
      });

      it('stores the posOffsetY', () => {
        expect(sprite.posOffsetY).toEqual(sheets.right.posOffsetY);
      });

      it('stores the clippedWidth', () => {
        expect(sprite.clippedWidth).toEqual(sheets.right.clippedWidth);
      });

      it('stores the clippedHeight', () => {
        expect(sprite.clippedHeight).toEqual(sheets.right.clippedHeight);
      });
    });

    describe('left', () => {
      beforeEach(() => {
        sprite = spriteFactory.build('left', imageFactory);
      });

      it('stores the sheetWidth', () => {
        expect(sprite.sheetWidth).toEqual(sheets.left.width);
      });

      it('stores the columns', () => {
        expect(sprite.columns).toEqual(sheets.left.columns);
      });

      it('stores the src on the image', () => {
        expect(sprite.img.src).toContain(sheets.left.src.slice(2, -1));
      });

      it('stores the posOffsetX', () => {
        expect(sprite.posOffsetX).toEqual(sheets.left.posOffsetX);
      });

      it('stores the posOffsetY', () => {
        expect(sprite.posOffsetY).toEqual(sheets.left.posOffsetY);
      });

      it('stores the clippedWidth', () => {
        expect(sprite.clippedWidth).toEqual(sheets.left.clippedWidth);
      });

      it('stores the clippedHeight', () => {
        expect(sprite.clippedHeight).toEqual(sheets.left.clippedHeight);
      });
    });
  });
});
