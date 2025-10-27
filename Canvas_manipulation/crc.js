"use strict";
var CanvasManipulation;
(function (CanvasManipulation) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        drawBackground();
    }
    function drawBackground() {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        crc2.fillStyle = "#4A8DFF";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
})(CanvasManipulation || (CanvasManipulation = {}));
//# sourceMappingURL=crc.js.map