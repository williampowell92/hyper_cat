describe('Sound', () => {
  let src;
  let soundFactory;
  let sound;
  let mockAudio;

  beforeEach(() => {
    src = 'public/assets/sounds/background_music.mp3';
    mockAudio = document.createElement('audio');
    spyOn(document, 'createElement').and.returnValue(mockAudio);
    soundFactory = new SoundFactory();
    sound = soundFactory.build(src);
  });

  describe('initialize', () => {
    it('creates an audio element', () => {
      expect(sound.audio).toEqual(mockAudio);
    });
  });
});
