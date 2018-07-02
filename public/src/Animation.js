function Animation() {
  this.currentFrame = 0;
  this.frameX = 0;
}

Animation.prototype = {
  repositionFrame(width, columnCount) {
    this._updateFrame(columnCount);
    this.frameX = width / columnCount * this.currentFrame;
  },

  _updateFrame(columnCount) {
    this.currentFrame = (this.currentFrame + 1) % columnCount;
  }
};
