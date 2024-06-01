import {PizzaStore} from "./PizzaStore";
import {CaliforniaPizzaStore, ChicagoPizzaStore, NYPizzaStore} from "./Factories";

function main() {
    const nyStore: PizzaStore = new NYPizzaStore();
    nyStore.orderPizza('cheese');

    console.log();

    const chicagoStore: PizzaStore = new ChicagoPizzaStore();
    chicagoStore.orderPizza('cheese');

    console.log();

    const californiaStore: PizzaStore = new CaliforniaPizzaStore();
    californiaStore.orderPizza('cheese');
}

main();
