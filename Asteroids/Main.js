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
        Asteroids.createPaths();
        Asteroids.crc2 = canvas.getContext("2d");
        Asteroids.crc2.fillStyle = "black";
        Asteroids.crc2.strokeStyle = "white";
        Asteroids.crc2.lineWidth = 2;
        //canvas.addEventListener("mousedown", loadlaser);
        canvas.addEventListener("mouseup", shootLaser);
        //canvas.addEventListener("keypress", handleKeypress);
        //canvas.addEventListener("mousemove", setHeading);
        console.log("Loaded");
        createAsteroids(3);
        window.setInterval(update, 20);
    }
    function update() {
        console.log("Update");
        Asteroids.crc2.fillRect(0, 0, Asteroids.crc2.canvas.width, Asteroids.crc2.canvas.height);
        let ship = new Asteroids.Ship();
        Asteroids.crc2.lineWidth = 2;
        ship.draw();
        for (let asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }
        if (asteroids.length < 4) {
            createAsteroids(2);
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
        if (_asteroid.size > 0.5) {
            for (let i = 0; i < Math.floor(Math.random() * 3 + 1); i++) {
                let fragment = new Asteroids.Asteroid();
                fragment.size = _asteroid.size / 2;
                fragment.pos.set(_asteroid.pos.x, _asteroid.pos.y);
                fragment.vel.set(fragment.randomvelocityvalue(_asteroid.vel.x, _asteroid.vel.x * 2), fragment.randomvelocityvalue(_asteroid.vel.y, _asteroid.vel.y * 2));
                asteroids.push(fragment);
            }
        }
        let index = asteroids.indexOf(_asteroid);
        asteroids.splice(index, 1);
    }
    function createAsteroids(_nAsteroids) {
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new Asteroids.Asteroid();
            asteroids.push(asteroid);
        }
    }
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Main.js.map