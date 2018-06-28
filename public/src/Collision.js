function Collision() {

}

Collision.prototype = {
  isCollidingOnTop(body1, body2) {
    return !(
      body1.center.x + body1.size.x / 2 <= body2.center.x - body2.size.x / 2
      || body1.center.x - body1.size.x / 2 >= body2.center.x + body2.size.x / 2
      || body1.center.y + body1.size.y / 2 <= body2.center.y - body2.size.y / 2
      || body1.center.y - body1.size.y / 2 >= body2.center.y - body2.size.y / 2
    );
  }
};
