function Collision() {

}

Collision.prototype = {
  isColliding(body1, body2) {
    return !(
      body1.center.x + body1.size.x / 2 <= body2.center.x - body2.size.x / 2
    );
  }
};
