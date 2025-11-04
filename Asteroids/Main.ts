namespace Asteroids {
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    let movables: Movable[] = [];
    let rep: number = 0;


    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.getElementById("playfield") as HTMLCanvasElement;
        if (!canvas) {
            return;
        }
        createPaths();
        crc2 = canvas.getContext("2d") as CanvasRenderingContext2D;
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        crc2.lineWidth = 2;

        canvas.addEventListener("feuerfrei", hndlufoshoot);
        canvas.addEventListener("mouseup", shootLaser);
        //canvas.addEventListener("keypress", handleKeypress);
        //canvas.addEventListener("mousemove", setHeading);
        console.log("Loaded");
        createAsteroids(3);
        window.setInterval(update, 20);
    }


    function update(): void {
        console.log("Update");
        rep++;
        let asteroidcount: number = 0;
        let ufocount: number = 0;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        let ship: Ship = new Ship();
        crc2.lineWidth = 2;
        ship.draw();
        for (let instance of movables) {
            instance.move(1 / 50);
            instance.draw();
            if (instance instanceof Asteroid) {
                asteroidcount++;
            }
            if (instance instanceof Ufo) {
                ufocount++;
            }

        }
        deleteexpanables();
        if (asteroidcount < 4) {
            createAsteroids(2);
        }
        if (rep % 50 == 0 && ufocount < 3) {
            createUfo()
        }

    }


    function shootLaser(_event: MouseEvent): void {
        console.log("Shoot");
        let hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        let asteroidHit: Asteroid | null = getAsteroidHit(hotspot);
        if (asteroidHit) {
            breakAsteroid(asteroidHit);
        }
        crc2.beginPath();
        crc2.arc(hotspot.x, hotspot.y, 5, 0, 2 * Math.PI);
        crc2.stroke();
    }

    function getAsteroidHit(_hotspot: Vector): Asteroid | null {
        for (let instance of movables) {
            if (instance instanceof Asteroid && instance.isHit(_hotspot)) {
                return instance;
            }
            else if (instance instanceof Ufo && instance.isHit(_hotspot)) {
                instance.isHit;
            }
        }
        return null;
    }

    function breakAsteroid(_asteroid: Asteroid): void {
        if (_asteroid.size > 0.5) {
            for (let i: number = 0; i < Math.floor(Math.random() * 3 + 1); i++) {
                let fragment: Asteroid = new Asteroid();
                fragment.size = _asteroid.size / 2;
                fragment.pos = _asteroid.pos.copy();
                fragment.vel.set(fragment.randomvelocityvalue(_asteroid.vel.x, _asteroid.vel.x * 2), fragment.randomvelocityvalue(_asteroid.vel.y, _asteroid.vel.y * 2));
                movables.push(fragment);
            }
        }
        _asteroid.expandeble = true;
    }

    function createAsteroids(_nAsteroids: number): void {
        for (let i: number = 0; i < _nAsteroids; i++) {
            let asteroid: Asteroid = new Asteroid();
            movables.push(asteroid);
        }
    }

    function createUfo() {
        let newufo: Ufo = new Ufo;
        movables.push(newufo);
    }

    function hndlufoshoot(_event: Event): void {
        let ufo: Ufo = (<CustomEvent>_event).detail.ufo;
        shootproj(ufo.pos);
    }

    function shootproj(_ufopos: Vector): void {
        console.log("Shoot Projectile");
        let origin: Vector = new Vector(_ufopos.x, _ufopos.y);
        let vel: Vector = Vector.getRandom(100, 100);
        let proj = new Projectile(origin, vel);
        movables.push(proj);
    }

    function deleteexpanables() {
        for (let i: number = movables.length - 1; i >= 0; i--)
            if (movables[i].expandeble) {
                movables.splice(i, 1);
            }
    }
}