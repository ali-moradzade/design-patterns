import {DuckCall, MallardDuck, RedheadDuck, RubberDuck} from "./ducks";
import {Quackable} from "./Quackable";

export class DuckSimulator {
    simulate() {
        const mallardDuck = new MallardDuck();
        const redheadDuck = new RedheadDuck();
        const duckCall = new DuckCall();
        const rubberDuck = new RubberDuck();

        console.log('Duck simulator');

        this.simulateDuck(mallardDuck);
        this.simulateDuck(redheadDuck);
        this.simulateDuck(duckCall);
        this.simulateDuck(rubberDuck);
    }

    simulateDuck(duck: Quackable) {
        duck.quack();
    }
}
