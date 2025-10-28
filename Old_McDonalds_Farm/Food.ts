namespace OldMcDonaldsFarm {
    export class Food {
        public name: string;
        public quantity: number;
        soldamount: number = 100;

        public constructor(_name: string, _quantity: number) {
            this.name = _name;
            this.quantity = _quantity;
        }
        public consume(amount: number): void {
            this.quantity -= amount;
            if (this.quantity < 0) {
                this.quantity = 0;
            }
        }
        public refill(): void {
            this.quantity += this.soldamount;
        }
    }
}