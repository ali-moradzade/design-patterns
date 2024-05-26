export abstract class Beverage {
    abstract description: string;

    getDescription() {
        return this.description;
    }

    abstract cost(): number;
}

export class HouseBlend extends Beverage {
    description = 'HouseBlend';

    cost(): number {
        return 0.89;
    }
}

export class DarkRoast extends Beverage {
    description = 'DarkRoast';

    cost(): number {
        return 0.99;
    }
}

export class Decaf extends Beverage {
    description = 'Decaf';

    cost(): number {
        return 1.05;
    }
}

export class Espresso extends Beverage {
    description = 'Espresso';

    cost(): number {
        return 1.99;
    }
}
