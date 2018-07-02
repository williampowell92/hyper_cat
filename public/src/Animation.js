function Animation(sheet, spriteFactory = new SpriteFactory()) {
  this.currentFrame = 0;
  this.frameX = 0;
  this.sprite = spriteFactory.build(sheet);
}

Animation.prototype = {
  repositionFrame() {
    this._updateFrame();
    this.frameX = this.sprite.sheetWidth / this.sprite.columns * this.currentFrame;
  },

  draw(context, gameSize, center, size) {
    context.drawImage(
      this.sprite.img,
      this.frameX,
      5,
      this.sprite.sheetWidth / this.sprite.columns,
      79,
      gameSize.x / 2 - (this.sprite.sheetWidth / this.sprite.columns) / 2 + 2.5,
      center.y - size.y / 2,
      this.sprite.sheetWidth / this.sprite.columns,
      79
    );
  },

  _updateFrame() {
    this.currentFrame = (this.currentFrame + 1) % this.sprite.columns;
  }
};

function AnimationFactory() {
  return {
    build: (
      sheet, spriteFactory = new SpriteFactory()
    ) => new Animation(sheet, spriteFactory)
  };
}
