namespace Asteroids {

    export class Movable {
        public pos: Vector;
        public vel: Vector;

        public constructor() {
            this.pos = new Vector(0, 0);
            this.vel = new Vector(this.randomvelocityvalue(10, 40), this.randomvelocityvalue(10, 40));
        }
        public move(_timeslice: number): void {
            const offset: Vector = this.vel.copy();
            offset.scale(_timeslice);
            this.pos.add(offset);
            if (this.pos.x < 0)
                this.pos.x += crc2.canvas.width;
            if (this.pos.y < 0)
                this.pos.y += crc2.canvas.height;
            if (this.pos.x > crc2.canvas.width)
                this.pos.x -= crc2.canvas.width;
            if (this.pos.y > crc2.canvas.height)
                this.pos.y -= crc2.canvas.height;
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