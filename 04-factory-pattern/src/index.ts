import {PizzaStore} from "./PizzaStore";
import {ChicagoPizzaStore, NYPizzaStore} from "./Factories";

function main() {
    const nyStore: PizzaStore = new NYPizzaStore();
    nyStore.orderPizza('cheese');

    console.log();

    const chicagoStore: PizzaStore = new ChicagoPizzaStore();
    chicagoStore.orderPizza('cheese');
}

main();
