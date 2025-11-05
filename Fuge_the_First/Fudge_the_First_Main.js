"use strict";
var Fugetry;
(function (Fugetry) {
    window.addEventListener("load", hndlload);
    let canvas;
    let currentrotation = 0;
    function hndlload(_event) {
        canvas = document.getElementById("screen");
        if (!canvas) {
            return;
        }
        Fugetry.crc3 = canvas.getContext("2d");
        Fugetry.crc3.fillStyle = "black";
        Fugetry.crc3.strokeStyle = "white";
        Fugetry.crc3.lineWidth = 2;
        //canvas.addEventListener("feuerfrei", xxx);
        //canvas.addEventListener("mouseup", xxx);
        //canvas.addEventListener("keypress", xxx);
        //canvas.addEventListener("mousemove", xxx);
        window.setInterval(start, 20);
    }
    function start() {
        currentrotation += 2;
        let ƒ = FudgeCore;
        let mesh = new ƒ.MeshCube("Cube"); // create a simple mesh representing a cube
        let material = new ƒ.Material("Texture", FudgeCore.ShaderLitTextured); // create a material with the default texture for testing
        let node = new ƒ.Node("qube"); // create a node as the scene graph
        node.addComponent(new ƒ.ComponentMesh(mesh)); // refer the mesh to the node
        node.addComponent(new ƒ.ComponentMaterial(material)); // refer the material to the node
        node.getComponent(ƒ.ComponentMesh).mtxPivot.rotate(new ƒ.Vector3(-30, currentrotation, -15)); // rotate the mesh
        let cmpCamera = new ƒ.ComponentCamera(); // setup a camera
        cmpCamera.mtxPivot.translateZ(-2); // move the camera back
        let viewport = new ƒ.Viewport(); // create a viewport to manage rendering of the graph to the canvas via the camera
        viewport.initialize("Viewport", node, cmpCamera, canvas);
        viewport.draw(); // render
    }
})(Fugetry || (Fugetry = {}));
//# sourceMappingURL=Fudge_the_First_Main.js.map