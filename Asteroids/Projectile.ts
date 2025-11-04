namespace Asteroids {
    export class Projectile extends Movable {
        public static lifeTime: number = 3;
        private remainingLifeTime: number;
        

        constructor(_origin:Vector,_vel:Vector) {
            super();
            this.whatAmI = "projectile";
            this.remainingLifeTime = Projectile.lifeTime;
            this.vel = _vel.copy();
            this.pos = _origin;
        }
        public move(_timeslice: number): void {
            super.move(_timeslice);
            this.remainingLifeTime -= _timeslice;
            if (this.remainingLifeTime <= 0) {
                this.vel = new Vector(0, 0);
                this.explode();
                this.expandeble = true;
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
            crc2.translate(0, 0);
            crc2.stroke(exposionPath);
            crc2.restore();
        }
    }
}