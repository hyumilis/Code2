"use strict";
var Asteroids;
(function (Asteroids) {
    class Movable {
        pos;
        vel;
        whatAmI;
        expandeble;
        constructor() {
            this.whatAmI = "movable";
            this.pos = new Asteroids.Vector(0, 0);
            this.vel = new Asteroids.Vector(this.randomvelocityvalue(10, 40), this.randomvelocityvalue(10, 40));
            this.expandeble = false;
        }
        move(_timeslice) {
            const offset = this.vel.copy();
            offset.scale(_timeslice);
            this.pos.add(offset);
        }
        draw() {
            // to be implemented by subclasses
        }
        randomvelocityvalue(_min, _max) {
            const value = Math.random() * (_max - _min) + _min;
            const direction = Math.random() < 0.5 ? -1 : 1;
            const returnvalue = value * direction;
            return returnvalue;
        }
    }
    Asteroids.Movable = Movable;
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Movable.js.map