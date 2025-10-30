namespace OldMcDonaldsFarm {
    let animaltable: HTMLTableElement;
    let foodtable: HTMLTableElement;
    let animals: Animal[] = [];
    let foods: Food[] = [];


    window.addEventListener("load", handleLoad);
    function handleLoad(_event: Event): void {
        animaltable = document.getElementById("animals") as HTMLTableElement;
        foodtable = document.getElementById("foodsupply") as HTMLTableElement;
        createfood();
        console.log("Initial food stocks:");
        printfoodstock();
        createanimals();
        singing()
        feedanimals();
        console.log("Food stocks after feeding:");
        printfoodstock();
        restocklowfood();
        dospecial();
        console.log("Food stocks after restocking:");
        printfoodstock();
    }
    function createfood(): void {
        let grass = new Food("Grass", Math.floor(Math.random() * 100));
        foods.push(grass);
        let hardcorn = new Food("HardCorn", Math.floor(Math.random() * 100));
        foods.push(hardcorn);
        let slop = new Food("Slop", Math.floor(Math.random() * 100));
        foods.push(slop);
        let pollen = new Food("Pollen", Math.floor(Math.random() * 1000));
        foods.push(pollen);
    }
    function createanimals(): void {
        let berta = new Cow("Berta", 2);
        animals.push(berta);
        let marvin = new Bee("Marvin", 42);
        animals.push(marvin);
        let sissie = new Pig("Sissie", 2);
        animals.push(sissie);
        let franzi = new Sheep("Franzi", 1);
        animals.push(franzi);
        let lian = new Duck("Lian", Math.floor(Math.random() * 69));
        animals.push(lian);
    }
    function printfoodstock(): void {
        for (let i = 0; i < foods.length; i++) {
            console.log(`${foods[i].name}: ${foods[i].quantity}`);
        }
    }
    function singing(): void {
        for (let i = 0; i < animals.length; i++) {
            console.log(animals[i].sing());
        }
    }
    function feedanimals(): void {
        for (let i = 0; i < animals.length; i++) {
            const curfood = foods.find(_food => _food.name === animals[i].food);
            if (curfood) {
                curfood.quantity -= animals[i].hunger;
                if (curfood.quantity < 0) {
                    curfood.quantity = 0;
                }
            }
        }
    }
    function restocklowfood(): void {
        for (let i = 0; i < foods.length; i++) {
            if (foods[i].quantity < 20) {
                let restockamount = 100 - foods[i].quantity;
                foods[i].refill();
            }
        }
    }
    function dospecial(): void {
        for (let i = 0; i < animals.length; i++) {
            animals[i].doSpecialAction();
        }
    }
}