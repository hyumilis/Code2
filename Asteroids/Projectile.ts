namespace Asteroids {

    export class Projectile extends Movable {
        public lifeTime: number;

        constructor() {
            super();
            this.lifeTime = 3;
            this.vel = this.vel.copy();
        }
        public move(_timeslice: number): void {
            super.move(_timeslice);
            this.lifeTime -= _timeslice;
            if (this.lifeTime <= 0) {
                this.explode();
                this.vel = new Vector(0, 0);
            }
        }
        public draw(): void {
            crc2.save();
            crc2.translate(this.pos.x, this.pos.y);
            crc2.strokeRect(-1, -1, 1, 1);
            crc2.restore();
        }
        private explode(): void {
            crc2.save();
            crc2.translate(this.pos.x, this.pos.y);
            crc2.translate(-5, -5);
            crc2.stroke(exposionPath);
            crc2.restore();
        }
    }
}