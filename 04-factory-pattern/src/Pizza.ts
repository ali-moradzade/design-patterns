export interface Pizza {
    prepare(): void;

    bake(): void;

    cut(): void;

    box(): void;
}

export class NYStyleCheesePizza implements Pizza {
    private readonly name = 'NYStyleCheesePizza';

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

export class ChicagoStyleCheesePizza implements Pizza {
    private readonly name = 'ChicagoStyleCheesePizza';

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

export class NYStyleGreekPizza implements Pizza {
    private readonly name = 'NYStyleGreekPizza';

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

export class ChicagoStyleGreekPizza implements Pizza {
    private readonly name = 'ChicagoStyleGreekPizza';

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

export class NYStylePepperoniPizza implements Pizza {
    private readonly name = 'NYStylePepperoniPizza';

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

export class ChicagoStylePepperoniPizza implements Pizza {
    private readonly name = 'ChicagoStylePepperoniPizza';

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

export class NYStyleClamPizza implements Pizza {
    private readonly name = 'NYStyleClamPizza';

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

export class ChicagoStyleClamPizza implements Pizza {
    private readonly name = 'ChicagoStyleClamPizza';

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

export class NYStyleVeggiePizza implements Pizza {
    private readonly name = 'NYStyleVeggiePizza';

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

export class ChicagoStyleVeggiePizza implements Pizza {
    private readonly name = 'ChicagoStyleVeggiePizza';

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
