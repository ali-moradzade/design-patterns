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
import {
    CaliforniaPizzaIngredientFactory,
    ChicagoPizzaIngredientFactory,
    NYPizzaIngredientFactory,
    PizzaIngredientFactory
} from "./PizzaIngredientFactory";

export class ChicagoPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        const ingredientFactory: PizzaIngredientFactory = new ChicagoPizzaIngredientFactory();
        let pizza: Pizza = new ChicagoStyleCheesePizza(ingredientFactory);

        if (type === 'cheese') {
            pizza = new ChicagoStyleCheesePizza(ingredientFactory);
        } else if (type === 'greek') {
            pizza = new ChicagoStyleGreekPizza(ingredientFactory);
        } else if (type === 'pepperoni') {
            pizza = new ChicagoStylePepperoniPizza(ingredientFactory);
        } else if (type === 'clam') {
            pizza = new ChicagoStyleClamPizza(ingredientFactory);
        } else if (type === 'veggie') {
            pizza = new ChicagoStyleVeggiePizza(ingredientFactory);
        }

        return pizza;
    }
}

export class NYPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        const ingredientFactory: PizzaIngredientFactory = new NYPizzaIngredientFactory();
        let pizza: Pizza = new NYStyleCheesePizza(ingredientFactory);

        if (type === 'cheese') {
            pizza = new NYStyleCheesePizza(ingredientFactory);
        } else if (type === 'greek') {
            pizza = new NYStyleGreekPizza(ingredientFactory);
        } else if (type === 'pepperoni') {
            pizza = new NYStylePepperoniPizza(ingredientFactory);
        } else if (type === 'clam') {
            pizza = new NYStyleClamPizza(ingredientFactory);
        } else if (type === 'veggie') {
            pizza = new NYStyleVeggiePizza(ingredientFactory);
        }

        return pizza;
    }
}

export class CaliforniaPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        const ingredientFactory: PizzaIngredientFactory = new CaliforniaPizzaIngredientFactory();
        let pizza = new CaliforniaStyleCheesePizza(ingredientFactory);

        if (type === 'cheese') {
            pizza = new CaliforniaStyleCheesePizza(ingredientFactory);
        }

        return pizza;
    }
}
