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
            return `Old MacDonald had a farm,\n
                    Ee-aye, ee-aye, oh\n
                    And on his/that farm he had a ${this.sound},\n
                    Ee-aye, ee-aye, oh\n
                    With a ${this.sound} ${this.sound} here and a ${this.sound} ${this.sound} there\n
                    Here a ${this.sound}, there a ${this.sound},\n
                    Everywhere a ${this.sound} ${this.sound}\n
                    Old MacDonald had a farm,\n
                    Ee-aye, ee-aye, oh.`;
        }
    }
}