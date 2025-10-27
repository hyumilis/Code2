namespace CanvasManipulation {
    let canvas1: HTMLCanvasElement;
    let canvas2: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;

    window.addEventListener("load", handleLoad);
    function handleLoad(_event: Event): void {
        canvas1 = document.getElementById("left") as HTMLCanvasElement;
        canvas2 = document.getElementById("right") as HTMLCanvasElement;
        crc2 = canvas1.getContext("2d")!;
        drawBackground();
        crc2 = canvas2.getContext("2d")!;
        drawtriangles();
    }


    function drawBackground(): void {
        setRandomColor();
        crc2.fillRect(randomwidth(), randomheight(), randomwidth(), randomheight());
        setRandomColor();
        crc2.fillText("Hallo Welt", randomwidth(), randomheight(), randomwidth());
        setRandomColor();
        crc2.beginPath();
        crc2.arc(randomwidth(), randomheight(), randomradius(), 0, 2 * Math.PI);
        crc2.fill();
    }
    function drawtriangles(): void {

        crc2.fillStyle = "red";
        const startposx: number = randomwidth();
        const startposy: number = randomheight();
        const radius: number = 50;
        let tries: number = 0;
        let validinput: boolean = false;
        while (validinput == false) {
            const triesinput: string | null = prompt("How many triangles do you want the circle to have?(Nubers only)");
            if (triesinput != null) {
                const triesnumber: number = parseInt(triesinput);
                if (!isNaN(triesnumber) && triesnumber > 2) {
                    validinput = true;
                    tries = triesnumber;
                    break;
                }
            }
        }
        crc2.beginPath();
        crc2.moveTo(startposx, startposy);
        for (let i: number = 0; i < tries + 1; i++) {
            crc2.lineTo(startposx + Math.cos(i * 2 * Math.PI / tries) * radius, startposy + Math.sin(i * 2 * Math.PI / tries) * radius);
        }
        crc2.stroke();
        crc2.fill();
    }

    function randomwidth(): number {
        return Math.round(Math.random() * crc2.canvas.width);
    }
    function randomheight(): number {
        return Math.round(Math.random() * crc2.canvas.height);
    }
    function randomradius(): number {
        return Math.round(Math.random() * crc2.canvas.height);
    }
    function setRandomColor(): void {
        const randcolor: string = "#" + Math.floor(Math.random() * 16777215).toString(16);
        crc2.fillStyle = randcolor;
    }
}