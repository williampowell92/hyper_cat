function Keyboarder() {
  this.KEYS = { LEFT: 'ArrowLeft', RIGHT: 'ArrowRight', UP: 'ArrowUp' };
  this.keyState = {};

  const self = this;

  window.onkeydown = function onKeyDown(e) {
    self.keyState[e.key] = true;
  };

  window.onkeyup = function onKeyUp(e) {
    self.keyState[e.key] = false;
  };
}

Keyboarder.prototype._isDown = function isDown(key) {
  return this.keyState[key] === true;
};

Keyboarder.prototype.isRightKeyDown = function isRightKeyDown() {
  return this._isDown(this.KEYS.RIGHT);
};

Keyboarder.prototype.isLeftKeyDown = function isLeftKeyDown() {
  return this._isDown(this.KEYS.LEFT);
};
