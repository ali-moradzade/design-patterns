import {
    NYStyleCheesePizza,
    NYStyleClamPizza,
    NYStyleGreekPizza,
    NYStylePepperoniPizza,
    NYStyleVeggiePizza,
    Pizza,
} from "./Pizza";

export class NYPizzaFactory {
    createPizza(type: string): Pizza {
        let pizza: Pizza = new NYStyleCheesePizza();

        if (type === 'cheese') {
            pizza = new NYStyleCheesePizza();
        } else if (type === 'greek') {
            pizza = new NYStyleGreekPizza();
        } else if (type === 'pepperoni') {
            pizza = new NYStylePepperoniPizza();
        } else if (type === 'clam') {
            pizza = new NYStyleClamPizza();
        } else if (type === 'veggie') {
            pizza = new NYStyleVeggiePizza();
        }

        return pizza;
    }
}
