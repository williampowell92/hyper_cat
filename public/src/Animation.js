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

  _updateFrame() {
    this.currentFrame = (this.currentFrame + 1) % this.sprite.columns;
  }
};
