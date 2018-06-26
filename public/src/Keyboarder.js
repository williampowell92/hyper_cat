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

Keyboarder.prototype.isDown = function isDown(key) {
  return false;
};
