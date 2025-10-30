namespace Asteroids {
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    let asteroids: Asteroid[] = [];
    window.setInterval(update, 20);


    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.getElementById("playfield") as HTMLCanvasElement;
        if (!canvas) {
            return;
        }
        crc2 = canvas.getContext("2d") as CanvasRenderingContext2D;
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        crc2.lineWidth = 2;

        console.log("Loaded");
    }

    
    function update(): void {
        console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        let ship: Ship = new Ship();
        ship.draw();
        createAsteroids(5);
        for (let asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }

    }


    function createAsteroids(_nAsteroids: number): void {
        for (let i: number = 0; i < _nAsteroids; i++) {
            let asteroid: Asteroid = new Asteroid();
            asteroids.push(asteroid);
        }
    }
}