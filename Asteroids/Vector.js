"use strict";
var Asteroids;
(function (Asteroids) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        static getRandom(_minLength, _maxLenght) {
            let vec = new Vector(0, 0);
            let direction = Math.random() * 2 * Math.PI;
            vec.set(Math.cos(direction), Math.sin(direction));
            vec.scale(_minLength + Math.random() * (_maxLenght - _minLength));
            return vec;
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_fac) {
            this.x *= _fac;
            this.y *= _fac;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        copy() {
            return new Vector(this.x, this.y);
        }
        random(_maxX, _maxY) {
            this.x = Math.random() * _maxX;
            this.y = Math.random() * _maxY;
        }
        roundrandom(_maxX, _maxY) {
            this.x = Math.floor(Math.random() * (_maxX + 1));
            this.y = Math.floor(Math.random() * (_maxY + 1));
        }
        normalizedPlusMinusRandom() {
            this.x = Math.floor(Math.sin(Math.random() * Math.PI));
            this.y = Math.floor(Math.cos(Math.random() * Math.PI));
        }
    }
    Asteroids.Vector = Vector;
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Vector.js.map