describe('Sound', () => {
  let src;
  let soundFactory;
  let sound;
  let mockAudio;

  beforeEach(() => {
    src = 'public/assets/sounds/background_music.mp3';
    mockAudio = document.createElement('audio');
    spyOn(document, 'createElement').and.returnValue(mockAudio);
    spyOn(document.body, 'appendChild');
    soundFactory = new SoundFactory();
    sound = soundFactory.build(src);
  });

  describe('initialize', () => {
    it('creates an audio element', () => {
      expect(sound.audio).toEqual(mockAudio);
    });

    it('adds the src to the element', () => {
      expect(mockAudio.src).toContain(src);
    });

    it('adds preload auto to the element', () => {
      expect(mockAudio.attributes.preload.value).toEqual('auto');
    });

    it('adds loop true to the element', () => {
      expect(mockAudio.attributes.loop.value).toEqual('true');
    });

    it('adds controls none to the element', () => {
      expect(mockAudio.attributes.controls.value).toEqual('none');
    });

    it('calls append child with audio element', () => {
      expect(document.body.appendChild).toHaveBeenCalledWith(mockAudio);
    });
  });
});
