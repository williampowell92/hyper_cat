function Sound(src, loop) {
  this.audio = document.createElement('audio');
  this.audio.src = src;
  this.audio.setAttribute('preload', 'auto');
  if (loop) { this.audio.loop = true; }
  this.audio.setAttribute('controls', 'none');
  this.audio.style.display = 'none';
  document.body.appendChild(this.audio);
  console.log(this.audio);
}

Sound.prototype = {
  play() {
    this.audio.play();
  }
};

function SoundFactory() {
  return {
    build: (src, loop) => new Sound(src, loop)
  };
}
