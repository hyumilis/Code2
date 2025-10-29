"use strict";
var Asteroids;
(function (Asteroids) {
    window.addEventListener("load", handleLoad);
    //window.setTimeout(handleLoad, 20);
    function handleLoad(_event) {
        let canvas = document.getElementById("playfield");
        console.log("Asteroids loop starting");
        if (!canvas) {
            return;
        }
        Asteroids.crc2 = canvas.getContext("2d");
        Asteroids.crc2.fillStyle = "black";
        Asteroids.crc2.strokeStyle = "white";
        Asteroids.crc2.lineWidth = 2;
        Asteroids.createPaths();
        let asteroid = new Asteroids.Asteroid();
        asteroid.draw();
    }
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Main.js.map