function Sound(src) {
  this.audio = document.createElement('audio');
  this.audio.src = src;
  this.audio.setAttribute('preload', 'auto');
  this.audio.setAttribute('loop', 'true');
  this.audio.setAttribute('controls', 'none');
}

function SoundFactory() {
  return {
    build: src => new Sound(src)
  };
}
