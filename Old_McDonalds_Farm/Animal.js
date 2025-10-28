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
    }
    OldMcDonaldsFarm.Animal = Animal;
})(OldMcDonaldsFarm || (OldMcDonaldsFarm = {}));
//# sourceMappingURL=Animal.js.map