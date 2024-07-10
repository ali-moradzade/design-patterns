import {Coffee} from "./CoffeeWithHook";
import {Tea} from "./TeaWithHook";

function main() {
    const coffee = new Coffee();
    const tea = new Tea();

    coffee.prepareRecipe();
    console.log();
    tea.prepareRecipe();
}

main();
