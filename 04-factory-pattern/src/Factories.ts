import {Pizza} from "./Pizza";
import {
    CaliforniaStyleCheesePizza,
    ChicagoStyleCheesePizza,
    ChicagoStyleClamPizza,
    ChicagoStyleGreekPizza,
    ChicagoStylePepperoniPizza,
    ChicagoStyleVeggiePizza,
    NYStyleCheesePizza,
    NYStyleClamPizza,
    NYStyleGreekPizza,
    NYStylePepperoniPizza,
    NYStyleVeggiePizza,
} from './ConcretePizzas';
import {PizzaStore} from "./PizzaStore";

export class ChicagoPizzaStore extends PizzaStore {
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

export class NYPizzaStore extends PizzaStore {
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

export class CaliforniaPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        let pizza = new CaliforniaStyleCheesePizza();

        if (type === 'cheese') {
            pizza = new CaliforniaStyleCheesePizza();
        }

        return pizza;
    }
}
