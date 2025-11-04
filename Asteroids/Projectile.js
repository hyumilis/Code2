"use strict";
var Asteroids;
(function (Asteroids) {
    class Projectile extends Asteroids.Movable {
        static lifeTime = 3;
        remainingLifeTime;
        constructor(_origin, _vel) {
            super();
            this.whatAmI = "projectile";
            this.remainingLifeTime = Projectile.lifeTime;
            this.vel = _vel.copy();
            this.pos = _origin;
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.remainingLifeTime -= _timeslice;
            if (this.remainingLifeTime <= 0) {
                this.vel = new Asteroids.Vector(0, 0);
                this.explode();
                this.expandeble = true;
            }
        }
        draw() {
            Asteroids.crc2.save();
            Asteroids.crc2.translate(this.pos.x, this.pos.y);
            Asteroids.crc2.strokeRect(-1, -1, 1, 1);
            Asteroids.crc2.restore();
        }
        explode() {
            Asteroids.crc2.save();
            Asteroids.crc2.translate(this.pos.x, this.pos.y);
            Asteroids.crc2.translate(0, 0);
            Asteroids.crc2.stroke(Asteroids.exposionPath);
            Asteroids.crc2.restore();
        }
    }
    Asteroids.Projectile = Projectile;
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Projectile.js.map