namespace OldMcDonaldsFarm {
    export enum Species {
        Cow,
        Pig,
        Sheep,
        Duck,
        Bee
    }
    export class Animal {

        public name: string;
        public species: Species;
        public sound: string;
        public food: string;
        public hunger: number;


        public constructor(_name: string, _species: Species, _sound: string, _food: string, _hunger: number) {
            this.name = _name;
            this.species = _species;
            this.sound = _sound;
            this.food = _food;
            this.hunger = _hunger;
        }
        public sing(): string {
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
        public doSpecialAction(): void {
            // To be overridden by subclasses
        }
    }
    export class Cow extends Animal {
        public constructor(_name: string, _hunger: number) {
            super(_name, Species.Cow, "moo", "grass", _hunger);
        }
        public doSpecialAction(): number {
            console.log(`${this.name} says: Müü Müü Here's some fresh milk!`);
            return Math.floor(Math.random() * 2 + 1);
        }
    }
    export class Bee extends Animal {
        public constructor(_name: string, _hunger: number) {
            super(_name, Species.Bee, "buzz", "nectar", _hunger);
        }
        public doSpecialAction(): number {
            console.log( `${this.name} says: Bzz Bzz! Here's some sweet honey!`);
            return Math.floor(Math.random() * 5 + 5);
        }
    }
    export class Pig extends Animal {
        public constructor(_name: string, _hunger: number) {
            super(_name, Species.Pig, "oink", "slop", _hunger);
        }
        public doSpecialAction(): number {
            console.log( `${this.name} says: Oink oink! Don't eat me, I'm delicious!`);
            return Math.floor(Math.random() * 6 + 1);
        }
    }
    export class Sheep extends Animal {
        public constructor(_name: string, _hunger: number) {
            super(_name, Species.Sheep, "baa", "grass", _hunger);
        }
        public doSpecialAction(): number {
            console.log( `${this.name} says: Baa baa! Here's some warm wool for you!`);
            return Math.floor(Math.random() * 2 + 1);
        }
    }
    export class Duck extends Animal {
        public constructor(_name: string, _hunger: number) {
            super(_name, Species.Duck, "quack", "seeds", _hunger);
        }
        public doSpecialAction(): number {
            console.log( `${this.name} says: Quack quack! Here's some fresh eggs!`);
            return Math.floor(Math.random() * 3 + 1);
        }
    }
}