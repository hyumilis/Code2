namespace Asteroids {

    export class Asteroid {
        public pos: Vector;
        public vel: Vector;
        public size: number;
        public Type: number;

        public constructor() {
            this.pos = new Vector(0, Math.floor(Math.random() * crc2.canvas.height));
            this.vel = new Vector(this.randomvelocityvalue(10, 40), this.randomvelocityvalue(10, 40));
            this.size = this.chosetype();
            this.Type = Math.floor(Math.random() * 4);
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
            console.log(this.pos);
        }
        public draw(): void {
            crc2.save();
            crc2.translate(this.pos.x, this.pos.y);
            crc2.scale(this.size, this.size);
            crc2.translate(-50, -50);
            crc2.stroke(asteroidPaths[this.Type]);
            crc2.restore();
        }
        private randomvelocityvalue(_min: number, _max: number): number {
            const value: number = Math.random() * (_max - _min) + _min;
            const direction: number = Math.random() < 0.5 ? -1 : 1;
            const returnvalue: number = value * direction;
            return returnvalue;
        }
        private chosetype(): number {
            const chosentype: number = Math.floor(Math.random() * 4);
            if (chosentype == 0) {
                return 3;
            }
            return chosentype;
        }

    }
}