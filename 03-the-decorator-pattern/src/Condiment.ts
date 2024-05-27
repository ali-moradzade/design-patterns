import {Beverage, Size} from "./Beverage";

export abstract class CondimentDecorator extends Beverage {
    beverage: Beverage;

    abstract getDescription(): string;

    getSize(): Size {
        return this.beverage.getSize();
    }
}

export class Milk extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return `${this.beverage.getDescription()}, Milk`;
    }

    cost(): number {
        let totalCost = this.beverage.cost();

        if (this.beverage.getSize() === Size.TALL) {
            totalCost += 0.10;
        } else if (this.beverage.getSize() === Size.GRANDE) {
            totalCost += 0.15;
        } else if (this.beverage.getSize() === Size.VENTI) {
            totalCost += 0.20;
        }

        return totalCost;
    }
}

export class Mocha extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return `${this.beverage.getDescription()}, Mocha`;
    }

    // I added prices myself, increasing 0.05
    cost(): number {
        let totalCost = this.beverage.cost();

        if (this.beverage.getSize() === Size.TALL) {
            totalCost += 0.20;
        } else if (this.beverage.getSize() === Size.GRANDE) {
            totalCost += 0.25;
        } else if (this.beverage.getSize() === Size.VENTI) {
            totalCost += 0.30;
        }

        return totalCost;
    }
}

export class Soy extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return `${this.beverage.getDescription()}, Soy`;
    }

    // I added prices myself
    cost(): number {
        let totalCost = this.beverage.cost();

        if (this.beverage.getSize() === Size.TALL) {
            totalCost += 0.15;
        } else if (this.beverage.getSize() === Size.GRANDE) {
            totalCost += 0.20;
        } else if (this.beverage.getSize() === Size.VENTI) {
            totalCost += 0.25;
        }

        return totalCost;
    }
}

export class Whip extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return `${this.beverage.getDescription()}, Whip`;
    }

    cost(): number {
        let totalCost = this.beverage.cost();

        if (this.beverage.getSize() === Size.TALL) {
            totalCost += 0.10;
        } else if (this.beverage.getSize() === Size.GRANDE) {
            totalCost += 0.15;
        } else if (this.beverage.getSize() === Size.VENTI) {
            totalCost += 0.20;
        }

        return totalCost;
    }
}
