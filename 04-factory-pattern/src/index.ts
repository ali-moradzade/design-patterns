import {NYPizzaFactory} from "./NYPizzaFactory";
import {PizzaStore} from "./PizzaStore";
import {ChicagoPizzaFactory} from "./ChicagoPizzaFactory";

function main() {
    const nyFactory = new NYPizzaFactory();
    const nyStore = new PizzaStore(nyFactory);
    nyStore.orderPizza('veggie');

    console.log();

    const chicagoFactory = new ChicagoPizzaFactory();
    const chicagoStore = new PizzaStore(chicagoFactory);
    chicagoStore.orderPizza('veggie');
}

main();
