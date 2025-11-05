"use strict";
var FudgeCore;
(function (FudgeCore) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.getElementById("playfield");
        if (!canvas) {
            return;
        }
        FudgeCore.crc3 = canvas.getContext("2d");
        FudgeCore.crc3.fillStyle = "black";
        FudgeCore.crc3.strokeStyle = "white";
        FudgeCore.crc3.lineWidth = 2;
        //canvas.addEventListener("feuerfrei", xxx);
        //canvas.addEventListener("mouseup", xxx);
        //canvas.addEventListener("keypress", xxx);
        //canvas.addEventListener("mousemove", xxx);
    }
})(FudgeCore || (FudgeCore = {}));
//# sourceMappingURL=Fudge_the_First_Main.js.map