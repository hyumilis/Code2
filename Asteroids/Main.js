"use strict";
var Asteroids;
(function (Asteroids) {
    window.addEventListener("load", handleLoad);
    let asteroids = [];
    window.setInterval(update, 20);
    function handleLoad(_event) {
        let canvas = document.getElementById("playfield");
        if (!canvas) {
            return;
        }
        Asteroids.crc2 = canvas.getContext("2d");
        Asteroids.crc2.fillStyle = "black";
        Asteroids.crc2.strokeStyle = "white";
        Asteroids.crc2.lineWidth = 2;
        console.log("Loaded");
    }
    function update() {
        console.log("Update");
        Asteroids.crc2.fillRect(0, 0, Asteroids.crc2.canvas.width, Asteroids.crc2.canvas.height);
        let ship = new Asteroids.Ship();
        ship.draw();
        createAsteroids();
        for (let asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }
    }
    function createAsteroids(_nAsteroids) {
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new Asteroids.Asteroid();
            asteroids.push(asteroid);
        }
    }
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Main.js.map