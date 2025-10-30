"use strict";
var OldMcDonaldsFarm;
(function (OldMcDonaldsFarm) {
    let Species;
    (function (Species) {
        Species[Species["Cow"] = 0] = "Cow";
        Species[Species["Pig"] = 1] = "Pig";
        Species[Species["Sheep"] = 2] = "Sheep";
        Species[Species["Duck"] = 3] = "Duck";
        Species[Species["Bee"] = 4] = "Bee";
    })(Species = OldMcDonaldsFarm.Species || (OldMcDonaldsFarm.Species = {}));
    class Animal {
        name;
        species;
        sound;
        food;
        hunger;
        constructor(_name, _species, _sound, _food, _hunger) {
            this.name = _name;
            this.species = _species;
            this.sound = _sound;
            this.food = _food;
            this.hunger = _hunger;
        }
        sing() {
            return `
                    Old MacDonald had a farm,\n
                    Ee-aye, ee-aye, oh\n
                    And on his farm he had a ${this.name},\n
                    Ee-aye, ee-aye, oh\n
                    With a ${this.sound} ${this.sound} here and a ${this.sound} ${this.sound} there\n
                    Here a ${this.sound}, there a ${this.sound},\n
                    Everywhere a ${this.sound} ${this.sound}\n
                    Old MacDonald had a farm,\n
                    Ee-aye, ee-aye, oh.`;
        }
        doSpecialAction() {
            // To be overridden by subclasses
        }
    }
    OldMcDonaldsFarm.Animal = Animal;
    class Cow extends Animal {
        constructor(_name, _hunger) {
            super(_name, Species.Cow, "moo", "grass", _hunger);
        }
        doSpecialAction() {
            console.log(`${this.name} says: Müü Müü Here's some fresh milk!`);
            return Math.floor(Math.random() * 2 + 1);
        }
    }
    OldMcDonaldsFarm.Cow = Cow;
    class Bee extends Animal {
        constructor(_name, _hunger) {
            super(_name, Species.Bee, "buzz", "nectar", _hunger);
        }
        doSpecialAction() {
            console.log(`${this.name} says: Bzz Bzz! Here's some sweet honey!`);
            return Math.floor(Math.random() * 5 + 5);
        }
    }
    OldMcDonaldsFarm.Bee = Bee;
    class Pig extends Animal {
        constructor(_name, _hunger) {
            super(_name, Species.Pig, "oink", "slop", _hunger);
        }
        doSpecialAction() {
            console.log(`${this.name} says: Oink oink! Don't eat me, I'm delicious!`);
            return Math.floor(Math.random() * 6 + 1);
        }
    }
    OldMcDonaldsFarm.Pig = Pig;
    class Sheep extends Animal {
        constructor(_name, _hunger) {
            super(_name, Species.Sheep, "baa", "grass", _hunger);
        }
        doSpecialAction() {
            console.log(`${this.name} says: Baa baa! Here's some warm wool for you!`);
            return Math.floor(Math.random() * 2 + 1);
        }
    }
    OldMcDonaldsFarm.Sheep = Sheep;
    class Duck extends Animal {
        constructor(_name, _hunger) {
            super(_name, Species.Duck, "quack", "seeds", _hunger);
        }
        doSpecialAction() {
            console.log(`${this.name} says: Quack quack! Here's some fresh eggs!`);
            return Math.floor(Math.random() * 3 + 1);
        }
    }
    OldMcDonaldsFarm.Duck = Duck;
})(OldMcDonaldsFarm || (OldMcDonaldsFarm = {}));
//# sourceMappingURL=Animal.js.map