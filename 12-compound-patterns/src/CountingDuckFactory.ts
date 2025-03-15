import {AbstractDuckFactory} from "./AbstractDuckFactory";
import {Quackable} from "./Quackable";
import {QuackCounter} from "./QuackCounter";
import {DuckCall, MallardDuck, RedheadDuck, RubberDuck} from "./ducks";

export class CountingDuckFactory extends AbstractDuckFactory {
    createMallardDuck(): Quackable {
        return new QuackCounter(new MallardDuck());
    }

    createRedheadDuck(): Quackable {
        return new QuackCounter(new RedheadDuck());
    }

    createDuckCall(): Quackable {
        return new QuackCounter(new DuckCall());
    }

    createRubberDuck(): Quackable {
        return new QuackCounter(new RubberDuck());
    }
}
