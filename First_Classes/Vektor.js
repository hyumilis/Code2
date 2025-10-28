"use strict";
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
    scale(_factor) {
        return new Vector(this.x * _factor, this.y * _factor);
    }
    add(_addend) {
        this.x += _addend.x;
        this.y += _addend.y;
    }
}
//# sourceMappingURL=Vektor.js.map