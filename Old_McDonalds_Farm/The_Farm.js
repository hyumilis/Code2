"use strict";
var OldMcDonaldsFarm;
(function (OldMcDonaldsFarm) {
    let animaltable;
    let foodtable;
    let animals = [];
    let foods = [];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        animaltable = document.getElementById("animals");
        foodtable = document.getElementById("foodsupply");
        createfood();
        console.log("Initial food stocks:");
        printfoodstock();
        createanimals();
        singing();
        feedanimals();
        console.log("Food stocks after feeding:");
        printfoodstock();
        restocklowfood();
        dospecial();
        console.log("Food stocks after restocking:");
        printfoodstock();
    }
    function createfood() {
        let grass = new OldMcDonaldsFarm.Food("Grass", Math.floor(Math.random() * 100));
        foods.push(grass);
        let hardcorn = new OldMcDonaldsFarm.Food("HardCorn", Math.floor(Math.random() * 100));
        foods.push(hardcorn);
        let slop = new OldMcDonaldsFarm.Food("Slop", Math.floor(Math.random() * 100));
        foods.push(slop);
        let pollen = new OldMcDonaldsFarm.Food("Pollen", Math.floor(Math.random() * 1000));
        foods.push(pollen);
    }
    function createanimals() {
        let berta = new OldMcDonaldsFarm.Cow("Berta", 2);
        animals.push(berta);
        let marvin = new OldMcDonaldsFarm.Bee("Marvin", 42);
        animals.push(marvin);
        let sissie = new OldMcDonaldsFarm.Pig("Sissie", 2);
        animals.push(sissie);
        let franzi = new OldMcDonaldsFarm.Sheep("Franzi", 1);
        animals.push(franzi);
        let lian = new OldMcDonaldsFarm.Duck("Lian", Math.floor(Math.random() * 69));
        animals.push(lian);
    }
    function printfoodstock() {
        for (let i = 0; i < foods.length; i++) {
            console.log(`${foods[i].name}: ${foods[i].quantity}`);
        }
    }
    function singing() {
        for (let i = 0; i < animals.length; i++) {
            console.log(animals[i].sing());
        }
    }
    function feedanimals() {
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
    function restocklowfood() {
        for (let i = 0; i < foods.length; i++) {
            if (foods[i].quantity < 20) {
                let restockamount = 100 - foods[i].quantity;
                foods[i].refill();
            }
        }
    }
    function dospecial() {
        for (let i = 0; i < animals.length; i++) {
            animals[i].doSpecialAction();
        }
    }
})(OldMcDonaldsFarm || (OldMcDonaldsFarm = {}));
//# sourceMappingURL=The_Farm.js.map