import {Pizza} from "./Pizza";
import {SimplePizzaFactory} from "./SimplePizzaFactory";

export class PizzaStore {
    constructor(public simplePizzaFactory: SimplePizzaFactory) {
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
