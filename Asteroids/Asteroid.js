"use strict";
var Asteroids;
(function (Asteroids) {
    class Asteroid extends Asteroids.Movable {
        size;
        type;
        constructor() {
            super();
            this.pos = new Asteroids.Vector(Math.floor(Math.random() * Asteroids.crc2.canvas.width), 0);
            this.vel = new Asteroids.Vector(this.randomvelocityvalue(10, 40), this.randomvelocityvalue(10, 40));
            this.size = Math.random() * 1 + 0.5;
            this.type = Math.floor(Math.random() * 4);
        }
        move(_timeslice) {
            const offset = new Asteroids.Vector(this.vel.x, this.vel.y);
            offset.scale(_timeslice);
            this.pos.add(offset);
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
            Asteroids.crc2.scale(this.size, this.size);
            Asteroids.crc2.lineWidth = 2 / this.size;
            Asteroids.crc2.translate(-50, -50);
            Asteroids.crc2.stroke(Asteroids.asteroidPaths[this.type]);
            Asteroids.crc2.restore();
        }
        isHit(_hotspot) {
            let hitsize = 50 * this.size;
            let difference = new Asteroids.Vector(_hotspot.x - this.pos.x, _hotspot.y - this.pos.y);
            let distance = Math.sqrt((difference.x * difference.x) + (difference.y * difference.y));
            if (distance < hitsize) {
                return true;
            }
            return false;
        }
    }
    Asteroids.Asteroid = Asteroid;
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map