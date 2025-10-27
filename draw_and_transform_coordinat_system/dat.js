"use strict";
var CordSystemManipulation;
(function (CordSystemManipulation) {
    let canvas;
    let crc;
    let transformationsaves;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        canvas = document.querySelector("canvas");
        crc = canvas.getContext("2d");
        crc.fillStyle = "#588ee9ff";
        crc.fillRect(0, 0, canvas.width, canvas.height);
        drawCoordinateSystem();
        document.getElementById("btnRotate").addEventListener("click", rotate);
        document.getElementById("btnScaleUp").addEventListener("click", sizeup);
        document.getElementById("btnScaleDown").addEventListener("click", sizedown);
        document.getElementById("btnTranslateup").addEventListener("click", moveup);
        document.getElementById("btnTranslatedown").addEventListener("click", movedown);
        document.getElementById("btnTranslateLeft").addEventListener("click", moveleft);
        document.getElementById("btnTranslateRight").addEventListener("click", moveright);
        document.getElementById("btnReset").addEventListener("click", reset);
    }
    function drawCoordinateSystem() {
        crc.strokeStyle = getRandomColor();
        crc.lineWidth = 1;
        crc.beginPath();
        crc.moveTo(0, 0);
        crc.lineTo(200, 0);
        crc.stroke();
        for (let i = 0; i <= 200; i += 10) {
            crc.moveTo(i, 0);
            crc.lineTo(i, 5);
            crc.stroke();
            crc.moveTo(0, i);
            crc.lineTo(5, i);
            crc.stroke();
        }
        crc.moveTo(0, 0);
        crc.lineTo(0, 200);
        crc.stroke();
    }
    function rotate() {
        crc.rotate(20 * Math.PI / 180);
        drawCoordinateSystem();
    }
    function moveup() {
        crc.translate(0, -20);
        drawCoordinateSystem();
    }
    function moveleft() {
        crc.translate(-20, 0);
        drawCoordinateSystem();
    }
    function moveright() {
        crc.translate(20, 0);
        drawCoordinateSystem();
    }
    function movedown() {
        crc.translate(0, 20);
        drawCoordinateSystem();
    }
    function sizeup() {
        crc.scale(1.1, 1.1);
        drawCoordinateSystem();
    }
    function sizedown() {
        crc.scale(0.9, 0.9);
        drawCoordinateSystem();
    }
    function reset() {
        crc.
            drawCoordinateSystem();
    }
    function getRandomColor() {
        const randcolor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        return randcolor;
    }
})(CordSystemManipulation || (CordSystemManipulation = {}));
//# sourceMappingURL=dat.js.map