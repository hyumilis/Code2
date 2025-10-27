"use strict";
var CordSystemManipulation;
(function (CordSystemManipulation) {
    let canvas;
    let crc;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        canvas = document.querySelector("canvas");
        crc = canvas.getContext("2d");
        drawCoordinateSystem();
        transformCoordinateSystem();
    }
    function drawCoordinateSystem() {
        crc.strokeStyle = "black";
        crc.beginPath();
        crc.moveTo(0, crc.canvas.height / 2);
        crc.lineTo(crc.canvas.width, crc.canvas.height / 2);
        crc.moveTo(crc.canvas.width / 2, 0);
        crc.lineTo(crc.canvas.width / 2, crc.canvas.height);
        crc.stroke();
    }
    function transformCoordinateSystem() {
    }
})(CordSystemManipulation || (CordSystemManipulation = {}));
//# sourceMappingURL=dat.js.map