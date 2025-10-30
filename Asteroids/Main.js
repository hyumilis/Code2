"use strict";
var Asteroids;
(function (Asteroids) {
    window.addEventListener("load", handleLoad);
    let asteroids = [];
    function handleLoad(_event) {
        let canvas = document.getElementById("playfield");
        if (!canvas) {
            return;
        }
        Asteroids.crc2 = canvas.getContext("2d");
        Asteroids.crc2.fillStyle = "black";
        Asteroids.crc2.strokeStyle = "white";
        Asteroids.crc2.lineWidth = 2;
        //canvas.addEventListener("mousedown", loadlaser);
        canvas.addEventListener("mouseup", shootLaser);
        //canvas.addEventListener("keypress", handleKeypress);
        //canvas.addEventListener("mousemove", setHeading);
        console.log("Loaded");
        window.setInterval(update, 20);
    }
    function update() {
        console.log("Update");
        Asteroids.crc2.fillRect(0, 0, Asteroids.crc2.canvas.width, Asteroids.crc2.canvas.height);
        let ship = new Asteroids.Ship();
        ship.draw();
        createAsteroids(5);
        for (let asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }
    }
    function shootLaser(_event) {
        console.log("Shoot");
        let hotspot = new Asteroids.Vector(_event.clientX - Asteroids.crc2.canvas.offsetLeft, _event.clientY - Asteroids.crc2.canvas.offsetTop);
        let asteroidHit = getAsteroidHit(hotspot);
        if (asteroidHit) {
            breakAsteroid(asteroidHit);
        }
        Asteroids.crc2.beginPath();
        Asteroids.crc2.arc(hotspot.x, hotspot.y, 5, 0, 2 * Math.PI);
        Asteroids.crc2.stroke();
    }
    function getAsteroidHit(_hotspot) {
        for (let asteroid of asteroids) {
            if (asteroid.isHit(_hotspot)) {
                return asteroid;
            }
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        console.log("Break asteroid");
        let index = asteroids.indexOf(_asteroid);
        if (index > -1) {
            asteroids.splice(index, 1);
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