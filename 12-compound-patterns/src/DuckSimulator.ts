import {Quackable} from "./Quackable";
import {GooseAdapter} from "./GooseAdapter";
import {Goose} from "./Goose";
import {QuackCounter} from "./QuackCounter";
import {AbstractDuckFactory} from "./AbstractDuckFactory";

export class DuckSimulator {
    simulate(duckFactory: AbstractDuckFactory) {
        const mallardDuck = duckFactory.createMallardDuck();
        const redheadDuck = duckFactory.createRedheadDuck();
        const duckCall = duckFactory.createDuckCall();
        const rubberDuck = duckFactory.createRubberDuck();
        const gooseDuck = new GooseAdapter(new Goose());

        console.log('Duck simulator: with Abstract Factory');

        this.simulateDuck(mallardDuck);
        this.simulateDuck(redheadDuck);
        this.simulateDuck(duckCall);
        this.simulateDuck(rubberDuck);
        this.simulateDuck(gooseDuck);

        console.log(`The ducks quacked ${QuackCounter.getQuacks()} times`);
    }

    simulateDuck(duck: Quackable) {
        duck.quack();
    }
}
