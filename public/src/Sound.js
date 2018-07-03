function Sound() {
  this.audio = document.createElement('audio');
}

function SoundFactory() {
  return {
    build: () => new Sound()
  };
}
