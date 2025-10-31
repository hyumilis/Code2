"use strict";
var Asteroids;
(function (Asteroids) {
    class Ufo extends Asteroids.Movable {
        constructor() {
            super();
            this.whatAmI = "Ufo";
            this.pos = new Asteroids.Vector(0, Math.floor(Math.random() * Asteroids.crc2.canvas.height));
            this.vel = new Asteroids.Vector(60 * (Math.random() < 0.5 ? -1 : 1), 0);
        }
        move(_timeslice) {
            super.move(_timeslice);
            if (this.pos.x < 0)
                this.pos.x += Asteroids.crc2.canvas.width;
            if (this.pos.y < 0)
                this.pos.y += Asteroids.crc2.canvas.height;
            if (this.pos.x > Asteroids.crc2.canvas.width)
                this.pos.x -= Asteroids.crc2.canvas.width;
            if (this.pos.y > Asteroids.crc2.canvas.height)
                this.pos.y -= Asteroids.crc2.canvas.height;
        }
        draw() {
            Asteroids.crc2.save();
            Asteroids.crc2.translate(this.pos.x, this.pos.y);
            Asteroids.crc2.lineWidth = 2;
            Asteroids.crc2.translate(-20, -20);
            Asteroids.crc2.stroke(Asteroids.ufoPath);
            Asteroids.crc2.restore();
        }
        isHit(_hotspot) {
            let hitsize = 30;
            let difference = new Asteroids.Vector(_hotspot.x - this.pos.x, _hotspot.y - this.pos.y);
            let distance = Math.sqrt((difference.x * difference.x) + (difference.y * difference.y));
            if (distance < hitsize) {
                this.expandeble = true;
            }
        }
    }
    Asteroids.Ufo = Ufo;
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=UFO.js.map