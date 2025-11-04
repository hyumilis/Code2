"use strict";
var Asteroids;
(function (Asteroids) {
    window.addEventListener("load", handleLoad);
    let movables = [];
    let rep = 0;
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
        canvas.addEventListener("feuerfrei", hndlufoshoot);
        canvas.addEventListener("mouseup", shootLaser);
        //canvas.addEventListener("keypress", handleKeypress);
        //canvas.addEventListener("mousemove", setHeading);
        console.log("Loaded");
        createAsteroids(3);
        window.setInterval(update, 20);
    }
    function update() {
        console.log("Update");
        rep++;
        let asteroidcount = 0;
        let ufocount = 0;
        Asteroids.crc2.fillRect(0, 0, Asteroids.crc2.canvas.width, Asteroids.crc2.canvas.height);
        let ship = new Asteroids.Ship();
        Asteroids.crc2.lineWidth = 2;
        ship.draw();
        for (let instance of movables) {
            instance.move(1 / 50);
            instance.draw();
            if (instance instanceof Asteroids.Asteroid) {
                asteroidcount++;
            }
            if (instance instanceof Asteroids.Ufo) {
                ufocount++;
            }
        }
        deleteexpanables();
        if (asteroidcount < 4) {
            createAsteroids(2);
        }
        if (rep % 50 == 0 && ufocount < 3) {
            createUfo();
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
        for (let instance of movables) {
            if (instance instanceof Asteroids.Asteroid && instance.isHit(_hotspot)) {
                return instance;
            }
            else if (instance instanceof Asteroids.Ufo && instance.isHit(_hotspot)) {
                instance.isHit;
            }
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.5) {
            for (let i = 0; i < Math.floor(Math.random() * 3 + 1); i++) {
                let fragment = new Asteroids.Asteroid();
                fragment.size = _asteroid.size / 2;
                fragment.pos = _asteroid.pos.copy();
                fragment.vel.set(fragment.randomvelocityvalue(_asteroid.vel.x, _asteroid.vel.x * 2), fragment.randomvelocityvalue(_asteroid.vel.y, _asteroid.vel.y * 2));
                movables.push(fragment);
            }
        }
        _asteroid.expandeble = true;
    }
    function createAsteroids(_nAsteroids) {
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new Asteroids.Asteroid();
            movables.push(asteroid);
        }
    }
    function createUfo() {
        let newufo = new Asteroids.Ufo;
        movables.push(newufo);
    }
    function hndlufoshoot(_event) {
        let ufo = _event.detail.ufo;
        shootproj(ufo.pos);
    }
    function shootproj(_ufopos) {
        console.log("Shoot Projectile");
        let origin = new Asteroids.Vector(_ufopos.x, _ufopos.y);
        let vel = Asteroids.Vector.getRandom(100, 100);
        let proj = new Asteroids.Projectile(origin, vel);
        movables.push(proj);
    }
    function deleteexpanables() {
        for (let i = movables.length - 1; i >= 0; i--)
            if (movables[i].expandeble) {
                movables.splice(i, 1);
            }
    }
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Main.js.map