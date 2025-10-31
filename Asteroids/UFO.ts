namespace Asteroids {
    export class Ufo extends Movable {

        constructor() {
            super();
            this.whatAmI = "Ufo";
            this.pos = new Vector(0, Math.floor(Math.random() * crc2.canvas.height));
            this.vel = new Vector(60 * (Math.random() < 0.5 ? -1 : 1), 0);
        }
        public move(_timeslice: number): void {
            super.move(_timeslice);
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
            crc2.lineWidth = 2;
            crc2.translate(-20, -20);
            crc2.stroke(ufoPath);
            crc2.restore();
        }
        public isHit(_hotspot: Vector): void {
            let hitsize: number = 30;
            let difference: Vector = new Vector(_hotspot.x - this.pos.x, _hotspot.y - this.pos.y);
            let distance: number = Math.sqrt((difference.x * difference.x) + (difference.y * difference.y));
            if (distance < hitsize) {
                this.expandeble = true;
            }
        }
    }
}