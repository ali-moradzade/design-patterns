import {CheesePizza, ClamPizza, GreekPizza, PepperoniPizza, Pizza, VeggiePizza} from "./Pizza";

export class SimplePizzaFactory {
    createPizza(type: string): Pizza {
        let pizza: Pizza = new CheesePizza();

        if (type === 'cheese') {
            pizza = new CheesePizza();
        } else if (type === 'greek') {
            pizza = new GreekPizza();
        } else if (type === 'pepperoni') {
            pizza = new PepperoniPizza();
        } else if (type === 'clam') {
            pizza = new ClamPizza();
        } else if (type === 'veggie') {
            pizza = new VeggiePizza();
        }

        return pizza;
    }
}
