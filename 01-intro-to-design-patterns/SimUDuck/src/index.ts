import {Duck, MallardDuck, ModelDuck} from "./Duck";
import {FlyRocketPowered} from "./FlyBehavior";

function main() {
    const mallard: Duck = new MallardDuck();
    mallard.performQuack();
    mallard.performFly();

    const modelDock = new ModelDuck();
    modelDock.performFly();

    modelDock.setFlyBehavior(new FlyRocketPowered());
    modelDock.performFly();
}

main();
