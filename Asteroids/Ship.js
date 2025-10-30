"use strict";
var Asteroids;
(function (Asteroids) {
    class Ship {
        pos;
        constructor() {
            this.pos = new Asteroids.Vector(Asteroids.crc2.canvas.width / 2, Asteroids.crc2.canvas.height / 2);
        }
        draw() {
            Asteroids.crc2.save();
            Asteroids.crc2.translate(this.pos.x, this.pos.y);
            Asteroids.crc2.stroke(this.createShipPath());
            Asteroids.crc2.restore();
        }
        createShipPath() {
            let path = new Path2D();
            path.moveTo(15, 0);
            path.lineTo(-10, -10);
            path.lineTo(-5, 0);
            path.lineTo(-10, 10);
            path.closePath();
            return path;
        }
    }
    Asteroids.Ship = Ship;
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Ship.js.map