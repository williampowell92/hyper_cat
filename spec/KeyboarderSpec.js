describe('Keyboarder', () => {
  let keyboarder;

  beforeEach(() => {
    keyboarder = new Keyboarder();
  });

  function keyPress(key) {
    const event = new KeyboardEvent('keydown', {
      view: window,
      key
    });
    window.dispatchEvent(event);
  }

  describe('KEYS', () => {
    it('should have the correct keycode for left', () => {
      expect(keyboarder.KEYS.LEFT).toEqual('ArrowLeft');
    });

    it('should have the correct keycode for right', () => {
      expect(keyboarder.KEYS.RIGHT).toEqual('ArrowRight');
    });

    it('should have the correct keycode for up', () => {
      expect(keyboarder.KEYS.UP).toEqual('ArrowUp');
    });
  });

  describe('onkeydown', () => {
    it('sets the keyState of left key to true', () => {
      keyPress('ArrowLeft');
      expect(keyboarder.keyState.ArrowLeft).toEqual(true);
    });

    it('sets the keyState of right key to true', () => {
      keyPress('ArrowRight');
      expect(keyboarder.keyState.ArrowRight).toEqual(true);
    });

    it('sets the keyState of up key to true', () => {
      keyPress('ArrowUp');
      expect(keyboarder.keyState.ArrowUp).toEqual(true);
    });
  });

});
