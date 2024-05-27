export abstract class Beverage {
    abstract description: string;

    milk = false;
    soy = false;
    mocha = false;
    whip = false;

    hasMilk() {
        return this.milk;
    }

    setMilk(milk: boolean) {
        this.milk = milk;
    }

    hasSoy() {
        return this.soy;
    }

    setSoy(soy: boolean) {
        this.soy = soy;
    }

    hasMocha() {
        return this.mocha;
    }

    setMocha(mocha: boolean) {
        this.mocha = mocha;
    }

    hasWhip() {
        return this.whip;
    }

    setWhip(whip: boolean) {
        this.whip = whip;
    }

    getDescription() {
        return this.description;
    }

    cost() {
        let sum = 0;
        if (this.hasMilk()) {
            sum += 0.10;
        }

        if (this.hasSoy()) {
            sum += 0.15;
        }

        if (this.hasMocha()) {
            sum += 0.20;
        }

        if (this.hasWhip()) {
            sum += 0.10;
        }

        return sum;
    }
}

export class HouseBlend extends Beverage {
    description = 'HouseBlend';

    cost(): number {
        return 0.89 + super.cost();
    }
}

export class DarkRoast extends Beverage {
    description = 'DarkRoast';

    cost(): number {
        return 0.99 + super.cost();
    }
}

export class Decaf extends Beverage {
    description = 'Decaf';

    cost(): number {
        return 1.05 + super.cost();
    }
}

export class Espresso extends Beverage {
    description = 'Espresso';

    cost(): number {
        return 1.99 + super.cost();
    }
}
