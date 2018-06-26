describe('Keyboarder', () => {
  let keyboarder;

  beforeEach(() => {
    keyboarder = new Keyboarder();
  });

  function pressKey(key) {
    const event = new KeyboardEvent('keydown', { key });
    window.dispatchEvent(event);
  }

  function releaseKey(key) {
    const event = new KeyboardEvent('keyup', { key });
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
      pressKey('ArrowLeft');
      expect(keyboarder.keyState.ArrowLeft).toEqual(true);
    });

    it('sets the keyState of right key to true', () => {
      pressKey('ArrowRight');
      expect(keyboarder.keyState.ArrowRight).toEqual(true);
    });

    it('sets the keyState of up key to true', () => {
      pressKey('ArrowUp');
      expect(keyboarder.keyState.ArrowUp).toEqual(true);
    });
  });

  describe('onkeyup', () => {
    it('sets the keyState of left key to false', () => {
      releaseKey('ArrowLeft');
      expect(keyboarder.keyState.ArrowLeft).toEqual(false);
    });

    it('sets the keyState of right key to false', () => {
      releaseKey('ArrowRight');
      expect(keyboarder.keyState.ArrowRight).toEqual(false);
    });

    it('sets the keyState of up key to false', () => {
      releaseKey('ArrowUp');
      expect(keyboarder.keyState.ArrowUp).toEqual(false);
    });
  });

  describe('isDown', () => {
    it('returns false before a key is pressed', () => {
      expect(keyboarder.isDown(keyboarder.KEYS.LEFT)).toEqual(false);
    });

    it('returns true after a key is pressed', () => {
      pressKey(keyboarder.KEYS.LEFT);
      expect(keyboarder.isDown(keyboarder.KEYS.LEFT)).toEqual(true);
    });

    it('returns false after a key is released', () => {
      pressKey(keyboarder.KEYS.LEFT);
      releaseKey(keyboarder.KEYS.LEFT);
      expect(keyboarder.isDown(keyboarder.KEYS.LEFT)).toEqual(false);
    });

    it('returns false if a key is release but never pressed', () => {
      releaseKey(keyboarder.KEYS.LEFT);
      expect(keyboarder.isDown(keyboarder.KEYS.LEFT)).toEqual(false);
    });
  });
});
