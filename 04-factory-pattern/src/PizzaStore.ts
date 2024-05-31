import {Pizza} from "./Pizza";
import {NYPizzaFactory} from "./NYPizzaFactory";

export class PizzaStore {
    constructor(public simplePizzaFactory: NYPizzaFactory) {
    }

    orderPizza(type: string): Pizza {
        const pizza = this.simplePizzaFactory.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }
}
