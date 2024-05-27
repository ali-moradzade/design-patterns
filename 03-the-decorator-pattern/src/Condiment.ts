import {Beverage} from "./Beverage";

export abstract class CondimentDecorator extends Beverage {
    beverage: Beverage;

    abstract getDescription(): string;
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
        return this.beverage.cost() + 0.10;
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

    cost(): number {
        return this.beverage.cost() + 0.20;
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

    cost(): number {
        return this.beverage.cost() + 0.15;
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
        return this.beverage.cost() + 0.10;
    }
}
