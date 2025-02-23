import {DuckCall, MallardDuck, RedheadDuck, RubberDuck} from "./ducks";
import {Quackable} from "./Quackable";
import {GooseAdapter} from "./GooseAdapter";
import {Goose} from "./Goose";

export class DuckSimulator {
    simulate() {
        const mallardDuck = new MallardDuck();
        const redheadDuck = new RedheadDuck();
        const duckCall = new DuckCall();
        const rubberDuck = new RubberDuck();
        const gooseDuck = new GooseAdapter(new Goose());

        console.log('Duck simulator');

        this.simulateDuck(mallardDuck);
        this.simulateDuck(redheadDuck);
        this.simulateDuck(duckCall);
        this.simulateDuck(rubberDuck);
        this.simulateDuck(gooseDuck);
    }

    simulateDuck(duck: Quackable) {
        duck.quack();
    }
}
