namespace Farm {
    export class Animal {
        public name: string;
        public species: string;

        constructor(_name: string, _species: string) {
            this.name = _name;
            this.species = _species;
        }
        public makeSound(): void {
            console.log(`${this.name} the ${this.species} says Old McDonald had a farm, E-I-E-I-O!`);
        }
    }
}