function Platform(center, size, imageFactory = new ImageFactory()) {
  this.center = center;
  this.size = size;
  this.image = imageFactory.build();
  this.image.src = 'public/assets/imgs/platform_mid.png';
}

Platform.prototype = {
  update() {

  },

  draw(context, playerOffset) {
    context.drawImage(
      this.image,
      this.center.x - this.size.x / 2 - playerOffset,
      this.center.y - this.size.y / 2,
      this.size.x,
      this.size.y
    );
  },

  resolveCollision() {

  }
};

function ImageFactory() {
  return {
    build: () => new Image()
  };
}

function PlatformFactory() {
  return {
    build: (
      center, size, imageFactory = new ImageFactory()
    ) => new Platform(center, size, imageFactory)
  };
}
