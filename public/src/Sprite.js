function Sprite(sheet, imageFactory = new ImageFactory()) {
  const sheets = {
    idle: { width: 900, columns: 10, src: 'public/assets/sprite_idle.png' }
  };

  this.sheetWidth = sheets[sheet].width;
  this.columns = sheets[sheet].columns;
  this.img = imageFactory.build();
  this.img.src = sheets[sheet].src;
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
