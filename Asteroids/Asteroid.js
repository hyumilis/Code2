"use strict";
var Asteroids;
(function (Asteroids) {
    class Asteroid {
        pos;
        vel;
        size;
        Type;
        constructor() {
            this.pos = new Asteroids.Vector(0, Math.floor(Math.random() * Asteroids.crc2.canvas.height));
            this.vel = new Asteroids.Vector(this.randomvelocityvalue(10, 40), this.randomvelocityvalue(10, 40));
            this.size = this.chosetype();
            this.Type = Math.floor(Math.random() * 4);
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
            Asteroids.crc2.translate(-50, -50);
            Asteroids.crc2.stroke(Asteroids.asteroidPaths[this.Type]);
            Asteroids.crc2.restore();
        }
        randomvelocityvalue(_min, _max) {
            const value = Math.random() * (_max - _min) + _min;
            const direction = Math.random() < 0.5 ? -1 : 1;
            const returnvalue = value * direction;
            return returnvalue;
        }
        chosetype() {
            const chosentype = Math.floor(Math.random() * 4);
            if (chosentype == 0) {
                return 3;
            }
            return chosentype;
        }
    }
    Asteroids.Asteroid = Asteroid;
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map