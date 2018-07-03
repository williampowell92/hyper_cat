function Sound(src) {
  this.audio = document.createElement('audio');
  this.audio.src = src;
  this.audio.setAttribute('preload', 'auto');
}

function SoundFactory() {
  return {
    build: src => new Sound(src)
  };
}
