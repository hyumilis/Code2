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
            Asteroids.crc2.stroke(Asteroids.shipPath);
            Asteroids.crc2.restore();
        }
    }
    Asteroids.Ship = Ship;
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Ship.js.map