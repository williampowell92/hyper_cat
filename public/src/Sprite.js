function Sprite(sheetWidth, columns, src, imageFactory = new ImageFactory()) {
  this.sheetWidth = sheetWidth;
  this.columns = columns;
  this.img = imageFactory.build();
  this.img.src = src;
}

function ImageFactory() {
  return {
    build: () => new Image()
  };
}

function SpriteFactory() {
  return {
    build: (
      sheetWidth, columns, src, imageFactory = new ImageFactory()
    ) => new Sprite(sheetWidth, columns, src, imageFactory)
  }
}
