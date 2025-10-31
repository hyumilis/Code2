namespace Asteroids {
    export class Ship {
        public pos: Vector
        public constructor() {
            this.pos = new Vector(crc2.canvas.width / 2, crc2.canvas.height / 2);
        }
        public draw(): void {
            crc2.save();
            crc2.translate(this.pos.x, this.pos.y);
            crc2.stroke(shipPath);
            crc2.restore();
        }

    }
}