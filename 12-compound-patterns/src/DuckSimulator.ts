import {Quackable} from "./Quackable";
import {GooseAdapter} from "./GooseAdapter";
import {Goose} from "./Goose";
import {QuackCounter} from "./QuackCounter";
import {AbstractDuckFactory} from "./AbstractDuckFactory";
import {Flock} from "./Flock";

export class DuckSimulator {
    simulate(duckFactory: AbstractDuckFactory) {
        const mallardDuck = duckFactory.createMallardDuck();
        const redheadDuck = duckFactory.createRedheadDuck();
        const duckCall = duckFactory.createDuckCall();
        const rubberDuck = duckFactory.createRubberDuck();
        const gooseDuck = new GooseAdapter(new Goose());

        console.log('Duck simulator: with Composite - Flocks');

        const flockOfDucks = new Flock();

        flockOfDucks.add(mallardDuck);
        flockOfDucks.add(redheadDuck);
        flockOfDucks.add(duckCall);
        flockOfDucks.add(rubberDuck);
        flockOfDucks.add(gooseDuck);

        const flockOfMallards = new Flock();

        const mallardOne = duckFactory.createMallardDuck();
        const mallardTwo = duckFactory.createMallardDuck();
        const mallardThree = duckFactory.createMallardDuck();
        const mallardFour = duckFactory.createMallardDuck();

        flockOfMallards.add(mallardOne);
        flockOfMallards.add(mallardTwo);
        flockOfMallards.add(mallardThree);
        flockOfMallards.add(mallardFour);

        flockOfDucks.add(flockOfMallards);

        console.log(`\nDuck Simulator: Whole Flock Simulation`);
        this.simulateDuck(flockOfDucks);

        console.log(`\nDuck Simulator: Mallard Flock Simulation`);
        this.simulateDuck(flockOfMallards);

        console.log(`\nThe ducks quacked ${QuackCounter.getQuacks()} times`);
    }

    simulateDuck(duck: Quackable) {
        duck.quack();
    }
}
