namespace Fugetry {
    window.addEventListener("load", hndlload);
    export let crc3: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement|null;
    let currentrotation: number = 0;

    function hndlload(_event: Event): void {
        canvas = document.getElementById("screen") as HTMLCanvasElement;
        if (!canvas) {
            return;
        }
        crc3 = canvas.getContext("2d") as CanvasRenderingContext2D;
        crc3.fillStyle = "black";
        crc3.strokeStyle = "white";
        crc3.lineWidth = 2;

        //canvas.addEventListener("feuerfrei", xxx);
        //canvas.addEventListener("mouseup", xxx);
        //canvas.addEventListener("keypress", xxx);
        //canvas.addEventListener("mousemove", xxx);
        window.setInterval(start, 20);
    }
    
    function start():void {
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
            viewport.initialize("Viewport", node, cmpCamera, canvas!);

            viewport.draw(); // render
        }
}