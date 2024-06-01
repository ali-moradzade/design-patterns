import {Pizza} from "./Pizza";

export class NYStyleCheesePizza extends Pizza {
    name = 'NY Style Sauce and Cheese Pizza';
    dough = 'Thin Crust Dough';
    sauce = 'Marinara Sauce';
    toppings = ['Grated Reggiano Cheese'];

    bake() {
        console.log(`baking ${this.name}`);
    }

    box() {
        console.log(`boxing ${this.name}`);
    }

    cut() {
        console.log(`cutting ${this.name}`);
    }
}

export class ChicagoStyleCheesePizza extends Pizza {
    name = 'Chicago Style Deep Dish Cheese Pizza';
    dough = 'Extra Thick Crust Dough';
    sauce = 'Plum Tomato Sauce';
    toppings = ['Shredded Mozzarella Cheese'];

    bake() {
        console.log(`baking ${this.name}`);
    }

    box() {
        console.log(`boxing ${this.name}`);
    }

    cut() {
        console.log(`cutting ${this.name}`);
    }
}

export class CaliforniaStyleCheesePizza extends Pizza {
    name = 'CaliforniaStyleCheesePizza';
    dough = 'dough';
    sauce = 'sauce';
    toppings = ['topping1', 'topping2'];

    bake() {
        console.log(`baking ${this.name}`);
    }

    box() {
        console.log(`boxing ${this.name}`);
    }

    cut() {
        console.log(`cutting ${this.name}`);
    }
}

export class NYStyleGreekPizza extends Pizza {
    name = 'NYStyleGreekPizza';
    dough = 'dough';
    sauce = 'sauce';
    toppings = ['topping1', "topping2"];

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

export class ChicagoStyleGreekPizza extends Pizza {
    name = 'ChicagoStyleGreekPizza';
    dough = 'dough';
    sauce = 'sauce';
    toppings = ['topping1', "topping2"];

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

export class NYStylePepperoniPizza extends Pizza {
    name = 'NYStylePepperoniPizza';
    dough = 'dough';
    sauce = 'sauce';
    toppings = ['topping1', "topping2"];

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

export class ChicagoStylePepperoniPizza extends Pizza {
    name = 'ChicagoStylePepperoniPizza';
    dough = 'dough';
    sauce = 'sauce';
    toppings = ['topping1', "topping2"];

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

export class NYStyleClamPizza extends Pizza {
    name = 'NYStyleClamPizza';
    dough = 'dough';
    sauce = 'sauce';
    toppings = ['topping1', "topping2"];

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

export class ChicagoStyleClamPizza extends Pizza {
    name = 'ChicagoStyleClamPizza';
    dough = 'dough';
    sauce = 'sauce';
    toppings = ['topping1', "topping2"];

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

export class NYStyleVeggiePizza extends Pizza {
    name = 'NYStyleVeggiePizza';
    dough = 'dough';
    sauce = 'sauce';
    toppings = ['topping1', "topping2"];

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

export class ChicagoStyleVeggiePizza extends Pizza {
    name = 'ChicagoStyleVeggiePizza';
    dough = 'dough';
    sauce = 'sauce';
    toppings = ['topping1', "topping2"];

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
