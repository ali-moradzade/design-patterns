import {Pizza} from "./Pizza";
import {PizzaIngredientFactory} from "./PizzaIngredientFactory";

export class NYStyleCheesePizza extends Pizza {
    name = 'NY Style Sauce and Cheese Pizza';

    constructor(
        public pizzaIngredientFactory: PizzaIngredientFactory,
    ) {
        super();
        this.dough = this.pizzaIngredientFactory.createDough();
        this.sauce = this.pizzaIngredientFactory.createSauce();
        this.veggies = this.pizzaIngredientFactory.createVeggies();
        this.cheese = this.pizzaIngredientFactory.createCheese();
        this.pepperoni = this.pizzaIngredientFactory.createPepperoni();
        this.clam = this.pizzaIngredientFactory.createClam();
    }

    prepare() {
        console.log(`Preparing ${this.name}`);
        console.log(`dough: ${this.dough}`);
        console.log(`sauce: ${this.sauce}`);
        console.log(`veggies: ${this.veggies}`);
        console.log(`cheese: ${this.cheese}`);
        console.log(`pepperoni: ${this.pepperoni}`);
        console.log(`clam: ${this.clam}`);
    }
}

export class ChicagoStyleCheesePizza extends Pizza {
    name = 'Chicago Style Deep Dish Cheese Pizza';

    constructor(
        public pizzaIngredientFactory: PizzaIngredientFactory,
    ) {
        super();
        this.dough = this.pizzaIngredientFactory.createDough();
        this.sauce = this.pizzaIngredientFactory.createSauce();
        this.veggies = this.pizzaIngredientFactory.createVeggies();
        this.cheese = this.pizzaIngredientFactory.createCheese();
        this.pepperoni = this.pizzaIngredientFactory.createPepperoni();
        this.clam = this.pizzaIngredientFactory.createClam();
    }

    prepare() {
        console.log(`Preparing ${this.name}`);
        console.log(`dough: ${this.dough}`);
        console.log(`sauce: ${this.sauce}`);
        console.log(`veggies: ${this.veggies}`);
        console.log(`cheese: ${this.cheese}`);
        console.log(`pepperoni: ${this.pepperoni}`);
        console.log(`clam: ${this.clam}`);
    }
}

export class CaliforniaStyleCheesePizza extends Pizza {
    name = 'CaliforniaStyleCheesePizza';

    constructor(
        public pizzaIngredientFactory: PizzaIngredientFactory,
    ) {
        super();
        this.dough = this.pizzaIngredientFactory.createDough();
        this.sauce = this.pizzaIngredientFactory.createSauce();
        this.veggies = this.pizzaIngredientFactory.createVeggies();
        this.cheese = this.pizzaIngredientFactory.createCheese();
        this.pepperoni = this.pizzaIngredientFactory.createPepperoni();
        this.clam = this.pizzaIngredientFactory.createClam();
    }

    prepare() {
        console.log(`Preparing ${this.name}`);
        console.log(`dough: ${this.dough}`);
        console.log(`sauce: ${this.sauce}`);
        console.log(`veggies: ${this.veggies}`);
        console.log(`cheese: ${this.cheese}`);
        console.log(`pepperoni: ${this.pepperoni}`);
        console.log(`clam: ${this.clam}`);
    }
}

export class NYStyleGreekPizza extends Pizza {
    name = 'NYStyleGreekPizza';

    constructor(
        public pizzaIngredientFactory: PizzaIngredientFactory,
    ) {
        super();
        this.dough = this.pizzaIngredientFactory.createDough();
        this.sauce = this.pizzaIngredientFactory.createSauce();
        this.veggies = this.pizzaIngredientFactory.createVeggies();
        this.cheese = this.pizzaIngredientFactory.createCheese();
        this.pepperoni = this.pizzaIngredientFactory.createPepperoni();
        this.clam = this.pizzaIngredientFactory.createClam();
    }

    prepare() {
        console.log(`Preparing ${this.name}`);
        console.log(`dough: ${this.dough}`);
        console.log(`sauce: ${this.sauce}`);
        console.log(`veggies: ${this.veggies}`);
        console.log(`cheese: ${this.cheese}`);
        console.log(`pepperoni: ${this.pepperoni}`);
        console.log(`clam: ${this.clam}`);
    }
}

export class ChicagoStyleGreekPizza extends Pizza {
    name = 'ChicagoStyleGreekPizza';

    constructor(
        public pizzaIngredientFactory: PizzaIngredientFactory,
    ) {
        super();
        this.dough = this.pizzaIngredientFactory.createDough();
        this.sauce = this.pizzaIngredientFactory.createSauce();
        this.veggies = this.pizzaIngredientFactory.createVeggies();
        this.cheese = this.pizzaIngredientFactory.createCheese();
        this.pepperoni = this.pizzaIngredientFactory.createPepperoni();
        this.clam = this.pizzaIngredientFactory.createClam();
    }

    prepare() {
        console.log(`Preparing ${this.name}`);
        console.log(`dough: ${this.dough}`);
        console.log(`sauce: ${this.sauce}`);
        console.log(`veggies: ${this.veggies}`);
        console.log(`cheese: ${this.cheese}`);
        console.log(`pepperoni: ${this.pepperoni}`);
        console.log(`clam: ${this.clam}`);
    }
}

export class NYStylePepperoniPizza extends Pizza {
    name = 'NYStylePepperoniPizza';

    constructor(
        public pizzaIngredientFactory: PizzaIngredientFactory,
    ) {
        super();
        this.dough = this.pizzaIngredientFactory.createDough();
        this.sauce = this.pizzaIngredientFactory.createSauce();
        this.veggies = this.pizzaIngredientFactory.createVeggies();
        this.cheese = this.pizzaIngredientFactory.createCheese();
        this.pepperoni = this.pizzaIngredientFactory.createPepperoni();
        this.clam = this.pizzaIngredientFactory.createClam();
    }

    prepare() {
        console.log(`Preparing ${this.name}`);
        console.log(`dough: ${this.dough}`);
        console.log(`sauce: ${this.sauce}`);
        console.log(`veggies: ${this.veggies}`);
        console.log(`cheese: ${this.cheese}`);
        console.log(`pepperoni: ${this.pepperoni}`);
        console.log(`clam: ${this.clam}`);
    }
}

export class NYStyleVeggiePizza extends Pizza {
    name = 'NYStyleVeggiePizza';

    constructor(
        public pizzaIngredientFactory: PizzaIngredientFactory,
    ) {
        super();
        this.dough = this.pizzaIngredientFactory.createDough();
        this.sauce = this.pizzaIngredientFactory.createSauce();
        this.veggies = this.pizzaIngredientFactory.createVeggies();
        this.cheese = this.pizzaIngredientFactory.createCheese();
        this.pepperoni = this.pizzaIngredientFactory.createPepperoni();
        this.clam = this.pizzaIngredientFactory.createClam();
    }

    prepare() {
        console.log(`Preparing ${this.name}`);
        console.log(`dough: ${this.dough}`);
        console.log(`sauce: ${this.sauce}`);
        console.log(`veggies: ${this.veggies}`);
        console.log(`cheese: ${this.cheese}`);
        console.log(`pepperoni: ${this.pepperoni}`);
        console.log(`clam: ${this.clam}`);
    }
}

export class ChicagoStylePepperoniPizza extends Pizza {
    name = 'ChicagoStylePepperoniPizza';

    constructor(
        public pizzaIngredientFactory: PizzaIngredientFactory,
    ) {
        super();
        this.dough = this.pizzaIngredientFactory.createDough();
        this.sauce = this.pizzaIngredientFactory.createSauce();
        this.veggies = this.pizzaIngredientFactory.createVeggies();
        this.cheese = this.pizzaIngredientFactory.createCheese();
        this.pepperoni = this.pizzaIngredientFactory.createPepperoni();
        this.clam = this.pizzaIngredientFactory.createClam();
    }

    prepare() {
        console.log(`Preparing ${this.name}`);
        console.log(`dough: ${this.dough}`);
        console.log(`sauce: ${this.sauce}`);
        console.log(`veggies: ${this.veggies}`);
        console.log(`cheese: ${this.cheese}`);
        console.log(`pepperoni: ${this.pepperoni}`);
        console.log(`clam: ${this.clam}`);
    }
}

export class NYStyleClamPizza extends Pizza {
    name = 'NYStyleClamPizza';

    constructor(
        public pizzaIngredientFactory: PizzaIngredientFactory,
    ) {
        super();
        this.dough = this.pizzaIngredientFactory.createDough();
        this.sauce = this.pizzaIngredientFactory.createSauce();
        this.veggies = this.pizzaIngredientFactory.createVeggies();
        this.cheese = this.pizzaIngredientFactory.createCheese();
        this.pepperoni = this.pizzaIngredientFactory.createPepperoni();
        this.clam = this.pizzaIngredientFactory.createClam();
    }

    prepare() {
        console.log(`Preparing ${this.name}`);
        console.log(`dough: ${this.dough}`);
        console.log(`sauce: ${this.sauce}`);
        console.log(`veggies: ${this.veggies}`);
        console.log(`cheese: ${this.cheese}`);
        console.log(`pepperoni: ${this.pepperoni}`);
        console.log(`clam: ${this.clam}`);
    }
}

export class ChicagoStyleClamPizza extends Pizza {
    name = 'ChicagoStyleClamPizza';

    constructor(
        public pizzaIngredientFactory: PizzaIngredientFactory,
    ) {
        super();
        this.dough = this.pizzaIngredientFactory.createDough();
        this.sauce = this.pizzaIngredientFactory.createSauce();
        this.veggies = this.pizzaIngredientFactory.createVeggies();
        this.cheese = this.pizzaIngredientFactory.createCheese();
        this.pepperoni = this.pizzaIngredientFactory.createPepperoni();
        this.clam = this.pizzaIngredientFactory.createClam();
    }

    prepare() {
        console.log(`Preparing ${this.name}`);
        console.log(`dough: ${this.dough}`);
        console.log(`sauce: ${this.sauce}`);
        console.log(`veggies: ${this.veggies}`);
        console.log(`cheese: ${this.cheese}`);
        console.log(`pepperoni: ${this.pepperoni}`);
        console.log(`clam: ${this.clam}`);
    }
}

export class ChicagoStyleVeggiePizza extends Pizza {
    name = 'ChicagoStyleVeggiePizza';

    constructor(
        public pizzaIngredientFactory: PizzaIngredientFactory,
    ) {
        super();
        this.dough = this.pizzaIngredientFactory.createDough();
        this.sauce = this.pizzaIngredientFactory.createSauce();
        this.veggies = this.pizzaIngredientFactory.createVeggies();
        this.cheese = this.pizzaIngredientFactory.createCheese();
        this.pepperoni = this.pizzaIngredientFactory.createPepperoni();
        this.clam = this.pizzaIngredientFactory.createClam();
    }

    prepare() {
        console.log(`Preparing ${this.name}`);
        console.log(`dough: ${this.dough}`);
        console.log(`sauce: ${this.sauce}`);
        console.log(`veggies: ${this.veggies}`);
        console.log(`cheese: ${this.cheese}`);
        console.log(`pepperoni: ${this.pepperoni}`);
        console.log(`clam: ${this.clam}`);
    }
}
