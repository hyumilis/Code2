namespace CanvasManipulation {

let canvas: HTMLCanvasElement = document.querySelector<HTMLCanvasElement>("canvas")!;
let crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;

crc2.fillStyle = "#4A8DFF";
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
}