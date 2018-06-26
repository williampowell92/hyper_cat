describe('Keyboarder', () => {
  let keyboarder;

  beforeEach(() => {
    keyboarder = new Keyboarder();
  });

  describe('KEYS', () => {
    it('should have the correct keycode for left', () => {
      expect(keyboarder.KEYS.LEFT).toEqual(37);
    });

    it('should have the correct keycode for right', () => {
      expect(keyboarder.KEYS.RIGHT).toEqual(39);
    });
  });
});
