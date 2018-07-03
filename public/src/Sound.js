function Sound(src) {
  this.audio = document.createElement('audio');
  this.audio.src = src;
  this.audio.setAttribute('preload', 'auto');
  this.audio.setAttribute('loop', 'true');
  this.audio.setAttribute('controls', 'none');
  this.audio.style.display = 'none';
  document.body.appendChild(this.audio);
}

Sound.prototype = {
  play() {
    this.audio.play();
  }
};

function SoundFactory() {
  return {
    build: src => new Sound(src)
  };
}
