namespace Classes {
    export class Vector {
        public x!: number;
        public y!: number;

        public constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        public set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }
        public scale(_fac: number): Vector {
            this.x *= _fac;
            this.y *= _fac;
        }
        public add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
}