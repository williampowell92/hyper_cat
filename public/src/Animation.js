function Animation() {
  this.currentFrame = 0;
  this.frameX = 0;
}

Animation.prototype = {
  updateFrame() {
    this.currentFrame = (this.currentFrame + 1) % 10;
  },

  positionFrame() {
    this.frameX = (this.frameX + 90);
  }
};
