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
      expect(keyboarder.KEYS.LEFT).toEqual(keyboarder.KEYS.LEFT);
    });

    it('should have the correct keycode for right', () => {
      expect(keyboarder.KEYS.RIGHT).toEqual(keyboarder.KEYS.RIGHT);
    });

    it('should have the correct keycode for up', () => {
      expect(keyboarder.KEYS.UP).toEqual(keyboarder.KEYS.UP);
    });
  });

  describe('isRightKeyDown', () => {
    it('returns true if right key is down', () => {
      pressKey(keyboarder.KEYS.RIGHT);
      expect(keyboarder.isRightKeyDown()).toEqual(true);
    });

    it('returns false if the right key has not been pressed', () => {
      expect(keyboarder.isRightKeyDown()).toEqual(false);
    });

    it('returns false if a different key is pressed', () => {
      pressKey(keyboarder.KEYS.LEFT);
      expect(keyboarder.isRightKeyDown()).toEqual(false);
    });

    it('returns false after the key has been released', () => {
      pressKey(keyboarder.KEYS.RIGHT);
      releaseKey(keyboarder.KEYS.RIGHT);
      expect(keyboarder.isRightKeyDown()).toEqual(false);
    });
  });
});
