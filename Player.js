 const Player = function (game, gameSize) {
     this.game = game;
     this.size = { x: 20, y: 55 };
     this.center = { x: 20, y: 0 };
     this.velocity = { x: 0, y: 0 };
     this.jumping = true;
     this.boundary = { x: 20, y: 90 };
     // this.gravity = { y: 1.5 };
     this.friction = { x: 0.9 };
     this.collision = { x: 0, y: 0 };
     this.movement = { x: 1.5 };
     this.jump = { y: -25 };
     this.keyboarder = new Keyboarder();
   };

   Player.prototype = {
     update(gameSize) {
     if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
       this.velocity.x += this.movement.x;
     } else if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {       t
       his.velocity.x -= this.movement.x;
     }

     if (this.center.y > gameSize.y - this.size.y - this.boundary.y) {
       this.jumping = false;
       this.center.y = gameSize.y - this.size.y - this.boundary.y;
       this.velocity.y = this.collision.y;
     }

     if (this.keyboarder.isDown(this.keyboarder.KEYS.SPACE) && this.jumping === false) {
       this.velocity.y = this.jump.y;       this.jumping = true;
     }

     if (this.center.x < this.boundary.x) {
       this.center.x = this.boundary.x;
       this.velocity.x = this.collision.x;
     }

     if (this.center.x > gameSize.x - this.boundary.x) {
       this.center.x = gameSize.x - this.boundary.x;
       this.velocity.x = this.collision.x;
     } ;

     this.velocity.y += this.game.gravity;
     this.center.x += this.velocity.x; // x axis movement
     this.center.y += this.velocity.y; // y axis movement
     this.velocity.x *= this.friction.x;
     this.velocity.y* = this.friction.x;
   },

   draw(screen) {
     screen.fillRect(
       this.center.x - (this.size.x / 2),
       this.center.y - (this.size.y / 2),
       this.size.x,       this.size.y
     );
    }
   };
