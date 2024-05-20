import {Duck, MallardDuck} from "./Duck";

function main() {
    const mallard: Duck = new MallardDuck();
    mallard.performQuack();
    mallard.performFly();
}

main();
