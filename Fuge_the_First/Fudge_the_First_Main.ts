namespace Fugetry {
    window.addEventListener("load", handleLoad);
    export let crc3: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.getElementById("playfield") as HTMLCanvasElement;
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
    }
}