import {
    ChicagoStyleCheesePizza,
    ChicagoStyleClamPizza,
    ChicagoStyleGreekPizza,
    ChicagoStylePepperoniPizza,
    ChicagoStyleVeggiePizza,
    Pizza,
} from "./Pizza";

export class ChicagoPizzaFactory {
    createPizza(type: string): Pizza {
        let pizza: Pizza = new ChicagoStyleCheesePizza();

        if (type === 'cheese') {
            pizza = new ChicagoStyleCheesePizza();
        } else if (type === 'greek') {
            pizza = new ChicagoStyleGreekPizza();
        } else if (type === 'pepperoni') {
            pizza = new ChicagoStylePepperoniPizza();
        } else if (type === 'clam') {
            pizza = new ChicagoStyleClamPizza();
        } else if (type === 'veggie') {
            pizza = new ChicagoStyleVeggiePizza();
        }

        return pizza;
    }
}
