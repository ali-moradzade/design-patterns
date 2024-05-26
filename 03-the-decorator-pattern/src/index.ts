import {Beverage, Espresso} from "./Beverage";

function main() {
    const beverage: Beverage = new Espresso();
    console.log(beverage.getDescription());
    console.log(beverage.cost());
}

main();
