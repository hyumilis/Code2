"use strict";
var OldMcDonaldsFarm;
(function (OldMcDonaldsFarm) {
    class Food {
        name;
        quantity;
        soldamount = 100;
        constructor(_name, _quantity) {
            this.name = _name;
            this.quantity = _quantity;
        }
        consume(amount) {
            this.quantity -= amount;
            if (this.quantity < 0) {
                this.quantity = 0;
            }
        }
        refill() {
            this.quantity += this.soldamount;
        }
    }
    OldMcDonaldsFarm.Food = Food;
})(OldMcDonaldsFarm || (OldMcDonaldsFarm = {}));
//# sourceMappingURL=Food.js.map