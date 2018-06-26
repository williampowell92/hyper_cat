describe('Example', () => {
  let example;

  beforeEach(() => {
    example = new Example();
  });

  describe('returnOne', () => {
    it('returns one', () => {
      expect(example.returnOne()).toEqual(1);
    });
  });
});
