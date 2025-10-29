"use strict";
var Asteroids;
(function (Asteroids) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_fac) {
            return new Vector(this.x * _fac, this.y * _fac);
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    Asteroids.Vector = Vector;
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Vektor.js.map