import {CheesePizza, GreekPizza, PepperoniPizza, Pizza} from "./Pizza";

export function orderPizza(type: string): Pizza {
    let pizza: Pizza = new CheesePizza();

    if (type === 'cheese') {
        pizza = new CheesePizza();
    } else if (type === 'greek') {
        pizza = new GreekPizza();
    } else if (type === 'pepperoni') {
        pizza = new PepperoniPizza();
    }

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
}
