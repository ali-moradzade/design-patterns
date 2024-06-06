export abstract class Pizza {
    name: string;
    dough: string;
    sauce: string;
    veggies: string[];
    cheese: string;
    pepperoni: string;
    clam: string;

    abstract prepare(): void;

    bake() {
        console.log(`Baking ${this.name}`);
        console.log('Bake for 23 minutes at 350');
    }

    cut() {
        console.log(`Cutting ${this.name}`);
        console.log('Cutting the pizza into diagonal slices');
    }

    box() {
        console.log(`Boxing ${this.name}`);
        console.log('Place pizza in official PizzaStore box');
    }
}
