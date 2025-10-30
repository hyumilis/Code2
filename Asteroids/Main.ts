namespace Asteroids {
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    let asteroids: Asteroid[] = [];


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

        //canvas.addEventListener("mousedown", loadlaser);
        canvas.addEventListener("mouseup", shootLaser);
        //canvas.addEventListener("keypress", handleKeypress);
        //canvas.addEventListener("mousemove", setHeading);
        console.log("Loaded");
        createAsteroids(5);
        window.setInterval(update, 20);
    }


    function update(): void {
        console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        let ship: Ship = new Ship();
        ship.draw();
        for (let asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
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
        for (let asteroid of asteroids) {
            if (asteroid.isHit(_hotspot)) {
                return asteroid;
            }
        }
        return null;
    }

    function breakAsteroid(_asteroid: Asteroid): void {
        if (_asteroid.size > 0.3) {
            for (let i: number = 0; i < Math.floor(Math.random() * 3 + 1); i++) {
                let fragment: Asteroid = new Asteroid();
                fragment.size = _asteroid.size / 2;
                fragment.pos.set(_asteroid.pos.x, _asteroid.pos.y);
                fragment.vel.set(fragment.randomvelocityvalue(_asteroid.vel.x, _asteroid.vel.x*2), fragment.randomvelocityvalue(_asteroid.vel.y, _asteroid.vel.y*2));
                asteroids.push(fragment);
            }
        }
        let index: number = asteroids.indexOf(_asteroid);
        asteroids.splice(index, 1);
    }

    function createAsteroids(_nAsteroids: number): void {
        for (let i: number = 0; i < _nAsteroids; i++) {
            let asteroid: Asteroid = new Asteroid();
            asteroids.push(asteroid);
        }
    }
}