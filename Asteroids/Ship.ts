namespace Asteroids {
    export class Ship {
        public pos: Vector
        public constructor() {
            this.pos = new Vector(crc2.canvas.width / 2, crc2.canvas.height / 2);
        }
        public draw(): void {
            crc2.save();
            crc2.translate(this.pos.x, this.pos.y);
            crc2.stroke(this.createShipPath());
            crc2.restore();
        }
        private createShipPath(): Path2D {
            let path: Path2D = new Path2D();
            path.moveTo(15, 0);
            path.lineTo(-10, -10);
            path.lineTo(-5, 0);
            path.lineTo(-10, 10);
            path.closePath();
            return path;
        }
    }
}