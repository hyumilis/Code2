"use strict";
var CanvasManipulation;
(function (CanvasManipulation) {
    let canvas1;
    let canvas2;
    let crc2;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        canvas1 = document.getElementById("left");
        canvas2 = document.getElementById("right");
        crc2 = canvas1.getContext("2d");
        drawBackground();
        crc2 = canvas2.getContext("2d");
        drawtriangles();
    }
    function drawBackground() {
        setRandomColor();
        crc2.fillRect(randomwidth(), randomheight(), randomwidth(), randomheight());
        setRandomColor();
        crc2.fillText("Hallo Welt", randomwidth(), randomheight(), randomwidth());
        setRandomColor();
        crc2.beginPath();
        crc2.arc(randomwidth(), randomheight(), randomradius(), 0, 2 * Math.PI);
        crc2.fill();
    }
    function drawtriangles() {
        crc2.fillStyle = "red";
        const startposx = randomwidth();
        const startposy = randomheight();
        const radius = 50;
        let tries = 0;
        let validinput = false;
        while (validinput == false) {
            const triesinput = prompt("How many triangles do you want the circle to have?(Nubers only)");
            if (triesinput != null) {
                const triesnumber = parseInt(triesinput);
                if (!isNaN(triesnumber) && triesnumber > 2) {
                    validinput = true;
                    tries = triesnumber;
                    break;
                }
            }
        }
        crc2.beginPath();
        crc2.moveTo(startposx, startposy);
        for (let i = 0; i < tries + 1; i++) {
            crc2.lineTo(startposx + Math.cos(i * 2 * Math.PI / tries) * radius, startposy + Math.sin(i * 2 * Math.PI / tries) * radius);
        }
        crc2.stroke();
        crc2.fill();
    }
    function randomwidth() {
        return Math.round(Math.random() * crc2.canvas.width);
    }
    function randomheight() {
        return Math.round(Math.random() * crc2.canvas.height);
    }
    function randomradius() {
        return Math.round(Math.random() * crc2.canvas.height);
    }
    function setRandomColor() {
        const randcolor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        crc2.fillStyle = randcolor;
    }
})(CanvasManipulation || (CanvasManipulation = {}));
//# sourceMappingURL=crc.js.map