"use strict";
var Asteroids;
(function (Asteroids) {
    let innerTime = 0;
    class Ufo extends Asteroids.Movable {
        constructor() {
            super();
            this.whatAmI = "Ufo";
            this.pos = new Asteroids.Vector(0, Math.floor(Math.random() * (Asteroids.crc2.canvas.height / 10)) * 10);
            this.vel = new Asteroids.Vector(60 * (Math.random() < 0.5 ? -1 : 1), 0);
        }
        move(_timeslice) {
            this.randommoveupdown(250);
            if (Math.random() < 0.01) {
                this.shoot();
            }
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
        shoot() {
            let feuerfrei = new CustomEvent("feuerfrei", { detail: { ufo: this } });
            Asteroids.crc2.canvas.dispatchEvent(feuerfrei);
        }
        randommoveupdown(_timebetweenjumps) {
            innerTime++;
            if (innerTime > (_timebetweenjumps + 150)) {
                if (Math.random() < 0.02) {
                    this.vel.y = this.vel.y + (Math.random() < 0.5 ? -1 : 1) * 30;
                    innerTime = 0;
                }
            }
            else if (innerTime > 150) {
                this.vel.y = 0;
            }
        }
    }
    Asteroids.Ufo = Ufo;
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Ufo.js.map