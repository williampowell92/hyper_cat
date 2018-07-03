function Sprite(sheet, imageFactory = new ImageFactory()) {
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

  this.sheetWidth = sheets[sheet].width;
  this.columns = sheets[sheet].columns;
  this.img = imageFactory.build();
  this.img.src = sheets[sheet].src;
  this.posOffsetX = sheets[sheet].posOffsetX;
  this.posOffsetY = sheets[sheet].posOffsetY;
  this.clippedWidth = sheets[sheet].clippedWidth;
  this.clippedHeight = sheets[sheet].clippedHeight;
}

function ImageFactory() {
  return {
    build: () => new Image()
  };
}

function SpriteFactory() {
  return {
    build: (
      sheet, imageFactory = new ImageFactory()
    ) => new Sprite(sheet, imageFactory)
  };
}
