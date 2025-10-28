namespace CordSystemManipulation {
    let canvas: HTMLCanvasElement;
    let crc: CanvasRenderingContext2D;

    let transformationsaves: Safes[];
    interface Safes {
        translateX: number;
        translateY: number;
        rotate: number;
        scaleX: number;
        scaleY: number;
    }

    window.addEventListener("load", handleLoad);
    function handleLoad(_event: Event): void {
        canvas = document.querySelector("canvas")!;
        crc = canvas.getContext("2d")!;
        crc.fillStyle = "#faead6";
        crc.fillRect(0, 0, canvas.width, canvas.height);
        drawCoordinateSystem();
        document.getElementById("btnRotate")!.addEventListener("click", rotate)!;
        document.getElementById("btnScaleUp")!.addEventListener("click", sizeup)!;
        document.getElementById("btnScaleDown")!.addEventListener("click", sizedown)!;
        document.getElementById("btnTranslateup")!.addEventListener("click", moveup)!;
        document.getElementById("btnTranslatedown")!.addEventListener("click", movedown)!;
        document.getElementById("btnTranslateLeft")!.addEventListener("click", moveleft)!;
        document.getElementById("btnTranslateRight")!.addEventListener("click", moveright)!;
        document.getElementById("btnrandscale")!.addEventListener("click", randscale)!;
        document.getElementById("btncreaterefsquare")!.addEventListener("click", createReferenceSquare)!;
    }




    function drawCoordinateSystem(): void {
        const cordlenght: number = 300;
        crc.strokeStyle = getRandomColor();
        crc.lineWidth = 2;
        crc.beginPath();
        crc.moveTo(0, 0);
        crc.lineTo(cordlenght, 0);
        crc.stroke();
        for (let i: number = 0; i <= cordlenght; i += 10) {
            crc.moveTo(i, 0);
            crc.lineTo(i, 5);
            crc.stroke();
            crc.moveTo(0, i);
            crc.lineTo(5, i);
            crc.stroke();
        }
        crc.moveTo(0, 0);
        crc.lineTo(0, cordlenght);
        crc.stroke();
    }
    function createReferenceSquare(): void {
        crc.fillStyle = getRandomColor();
        crc.fillRect(10, 10, 50, 50);
    }
    function getRandomColor(): string {
        const randcolor: string = "#" + Math.floor(Math.random() * 16777215).toString(16);
        return randcolor;
    }
    function rotate(): void {
        crc.rotate(20 * Math.PI / 180);
        drawCoordinateSystem();
    }
    function moveup(): void {
        crc.translate(0, -20);
        drawCoordinateSystem();
    }
    function moveleft(): void {
        crc.translate(-20, 0);
        drawCoordinateSystem();
    }
    function moveright(): void {
        crc.translate(20, 0);
        drawCoordinateSystem();
    }
    function movedown(): void {
        crc.translate(0, 20);
        drawCoordinateSystem();
    }
    function sizeup(): void {
        crc.scale(1.1, 1.1);
        drawCoordinateSystem();
    }
    function sizedown(): void {
        crc.scale(0.9, 0.9);
        drawCoordinateSystem();
    }
    function randscale(): void {
        const scaleX: number = Math.random() * 2;
        const scaleY: number = Math.random() * 2;
        crc.scale(scaleX, scaleY);
        drawCoordinateSystem();
    }
}

