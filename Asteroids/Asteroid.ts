namespace Asteroids {

    export class Asteroid {
        public pos: Vector;
        public vel: Vector;
        public size: number;
        public type: number;

        public constructor() {
            this.pos = new Vector(0, Math.floor(Math.random() * crc2.canvas.height));
            this.vel = new Vector(this.randomvelocityvalue(10, 40), this.randomvelocityvalue(10, 40));
            this.size = Math.random() * 1.2;
            this.type = Math.floor(Math.random() * 4);
        }
        public move(_timeslice: number): void {
            const offset: Vector = new Vector(this.vel.x, this.vel.y);
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
            crc2.save();
            crc2.translate(this.pos.x, this.pos.y);
            crc2.scale(this.size, this.size);
            crc2.translate(-50, -50);
            crc2.stroke(asteroidPaths[this.type]);
            crc2.restore();
        }
        public isHit(_hotspot: Vector): boolean {
            let hitsize: number = 50 * this.size;
            let difference: Vector = new Vector(_hotspot.x - this.pos.x, _hotspot.y - this.pos.y);
            let distance: number = Math.sqrt((difference.x * difference.x) + (difference.y * difference.y));
            if (distance < hitsize) {
                return true;
            }
            return false;
        }
        public randomvelocityvalue(_min: number, _max: number): number {
            const value: number = Math.random() * (_max - _min) + _min;
            const direction: number = Math.random() < 0.5 ? -1 : 1;
            const returnvalue: number = value * direction;
            return returnvalue;
        }
    }
}