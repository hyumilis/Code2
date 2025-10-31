namespace Asteroids {
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
        public scale(_fac: number): void {
            this.x *= _fac;
            this.y *= _fac;
        }
        public add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        public length(): number {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        public copy(): Vector {
            return new Vector(this.x, this.y);
        }
        public random(_maxX: number, _maxY: number): void {
            this.x = Math.random() * _maxX;
            this.y = Math.random() * _maxY;
        }
        public roundrandom(_maxX: number, _maxY: number): void {
            this.x = Math.floor(Math.random() * (_maxX + 1));
            this.y = Math.floor(Math.random() * (_maxY + 1));
        }
    }
}