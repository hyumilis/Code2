namespace Asteroids {

    export class Movable {
        public pos: Vector;
        public vel: Vector;
        public whatAmI: string;
        public expandeble: boolean;

        public constructor() {
            this.whatAmI = "movable";
            this.pos = new Vector(0, 0);
            this.vel = new Vector(this.randomvelocityvalue(10, 40), this.randomvelocityvalue(10, 40));
            this.expandeble = false;
        }
        public move(_timeslice: number): void {
            const offset: Vector = this.vel.copy();
            offset.scale(_timeslice);
            this.pos.add(offset);
        }
        public draw(): void {
            // to be implemented by subclasses
        }
        public randomvelocityvalue(_min: number, _max: number): number {
            const value: number = Math.random() * (_max - _min) + _min;
            const direction: number = Math.random() < 0.5 ? -1 : 1;
            const returnvalue: number = value * direction;
            return returnvalue;
        }
    }
}