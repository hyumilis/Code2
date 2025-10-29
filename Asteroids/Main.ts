namespace Asteroids {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;




    //window.setTimeout(handleLoad, 20);
    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.getElementById("playfield") as HTMLCanvasElement;
        console.log("Asteroids loop starting");
        if (!canvas){
            return;
        }
        crc2 = canvas.getContext("2d") as CanvasRenderingContext2D;
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        crc2.lineWidth = 2;
        createPaths();

    }
}