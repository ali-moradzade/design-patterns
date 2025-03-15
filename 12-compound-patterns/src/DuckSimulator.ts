import {DuckCall, MallardDuck, RedheadDuck, RubberDuck} from "./ducks";
import {Quackable} from "./Quackable";
import {GooseAdapter} from "./GooseAdapter";
import {Goose} from "./Goose";
import {QuackCounter} from "./QuackCounter";

export class DuckSimulator {
    simulate() {
        const mallardDuck = new QuackCounter(new MallardDuck());
        const redheadDuck = new QuackCounter(new RedheadDuck());
        const duckCall = new QuackCounter(new DuckCall());
        const rubberDuck = new QuackCounter(new RubberDuck());
        const gooseDuck = new GooseAdapter(new Goose());

        console.log('Duck simulator');

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
