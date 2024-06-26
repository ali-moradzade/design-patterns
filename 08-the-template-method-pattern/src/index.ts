import {Coffee} from "./Coffee";
import {Tea} from "./Tea";

function main() {
    const coffee = new Coffee();
    const tea = new Tea();

    coffee.prepareRecipe();
    console.log();
    tea.prepareRecipe();
}

main();
