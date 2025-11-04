namespace Asteroids {
    export class Vector {
        public x!: number;
        public y!: number;

        public constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        public static getRandom(_minLength: number, _maxLenght: number): Vector {
            let vec: Vector = new Vector(0, 0);
            let direction: number = Math.random() * 2 * Math.PI;
            vec.set(Math.cos(direction), Math.sin(direction));
            vec.scale(_minLength + Math.random() * (_maxLenght - _minLength));
            return vec;
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
        public normalizedPlusMinusRandom() {
            this.x = Math.floor(Math.sin(Math.random() * Math.PI));
            this.y = Math.floor(Math.cos(Math.random() * Math.PI));
        }
    }
}