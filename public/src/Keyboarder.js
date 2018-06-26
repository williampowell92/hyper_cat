function Keyboarder() {
  this.KEYS = { LEFT: 37, RIGHT: 39, UP: 38 };
  this.keyState = {};

  const self = this;

  window.onkeydown = function onKeyDown(e) {
    self.keyState.ArrowLeft = true;
  };
}
