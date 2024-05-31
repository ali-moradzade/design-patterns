export interface Pizza {
    prepare(): void;

    bake(): void;

    cut(): void;

    box(): void;
}

export class CheesePizza implements Pizza {
    private readonly name = 'CheesePizza';

    bake() {
        console.log(`baking ${this.name}`);
    }

    box() {
        console.log(`boxing ${this.name}`);
    }

    cut() {
        console.log(`cutting ${this.name}`);
    }

    prepare() {
        console.log(`preparing ${this.name}`);
    }
}

export class GreekPizza implements Pizza {
    private readonly name = 'GreekPizza';

    bake() {
        console.log(`baking ${this.name}`);
    }

    box() {
        console.log(`boxing ${this.name}`);
    }

    cut() {
        console.log(`cutting ${this.name}`);
    }

    prepare() {
        console.log(`preparing ${this.name}`);
    }
}

export class PepperoniPizza implements Pizza {
    private readonly name = 'PepperoniPizza';

    bake() {
        console.log(`baking ${this.name}`);
    }

    box() {
        console.log(`boxing ${this.name}`);
    }

    cut() {
        console.log(`cutting ${this.name}`);
    }

    prepare() {
        console.log(`preparing ${this.name}`);
    }
}

export class ClamPizza implements Pizza {
    private readonly name = 'ClamPizza';

    bake() {
        console.log(`baking ${this.name}`);
    }

    box() {
        console.log(`boxing ${this.name}`);
    }

    cut() {
        console.log(`cutting ${this.name}`);
    }

    prepare() {
        console.log(`preparing ${this.name}`);
    }
}

export class VeggiePizza implements Pizza {
    private readonly name = 'VeggiePizza';

    bake() {
        console.log(`baking ${this.name}`);
    }

    box() {
        console.log(`boxing ${this.name}`);
    }

    cut() {
        console.log(`cutting ${this.name}`);
    }

    prepare() {
        console.log(`preparing ${this.name}`);
    }
}
