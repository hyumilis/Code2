namespace Asteroids {
    let innerTime: number = 0;

    export class Ufo extends Movable {

        public constructor() {
            super();
            this.whatAmI = "Ufo";
            this.pos = new Vector(0, Math.floor(Math.random() * (crc2.canvas.height / 10)) * 10);
            this.vel = new Vector(60 * (Math.random() < 0.5 ? -1 : 1), 0);
        }

        public move(_timeslice: number): void {
            this.randommoveupdown(250);
            if (Math.random()<0.01){
                this.shoot();
            }
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
        public shoot(): void {
            let feuerfrei: CustomEvent = new CustomEvent("feuerfrei", { detail: { ufo: this } });
            crc2.canvas.dispatchEvent(feuerfrei);
        }
        public randommoveupdown(_timebetweenjumps: number): void {
            innerTime++;
            if (innerTime > (_timebetweenjumps + 150)) {
                if (Math.random() < 0.02) {
                    this.vel.y = this.vel.y + (Math.random() < 0.5 ? -1 : 1) * 30;
                    innerTime = 0;
                }
            }
            else if (innerTime > 150) {
                this.vel.y = 0;
            }
        }
    }
}
