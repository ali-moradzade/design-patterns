export interface PizzaIngredientFactory {
    createDough(): string;

    createSauce(): string;

    createCheese(): string;

    createVeggies(): string[];

    createPepperoni(): string;

    createClam(): string;
}

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
    createDough(): string {
        return 'thin crust dough';
    }

    createSauce(): string {
        return 'mariana sauce';
    }

    createCheese(): string {
        return 'reggiano cheese';
    }

    createClam(): string {
        return 'fresh clams';
    }

    createPepperoni(): string {
        return 'sliced pepperoni';
    }

    createVeggies(): string[] {
        return [
            'garlic',
            'onion',
            'mushroom',
            'red pepper',
        ];
    }
}

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
    createDough(): string {
        return 'thick crust dough';
    }

    createSauce(): string {
        return 'ketchup sauce';
    }

    createCheese(): string {
        return 'raw cheese';
    }

    createClam(): string {
        return 'green clams';
    }

    createPepperoni(): string {
        return 'sliced pepperoni';
    }

    createVeggies(): string[] {
        return [
            'garlic',
            'onion',
            'mushroom',
            'green pepper',
        ];
    }
}

export class CaliforniaPizzaIngredientFactory implements PizzaIngredientFactory {
    createDough(): string {
        return 'thin crust dough';
    }

    createSauce(): string {
        return 'mariana sauce';
    }

    createCheese(): string {
        return 'reggiano cheese';
    }

    createClam(): string {
        return 'fresh clams';
    }

    createPepperoni(): string {
        return 'sliced pepperoni';
    }

    createVeggies(): string[] {
        return [
            'garlic',
            'onion',
            'mushroom',
            'red pepper',
        ];
    }
}
