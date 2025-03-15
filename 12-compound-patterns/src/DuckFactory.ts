import {AbstractDuckFactory} from "./AbstractDuckFactory";
import {Quackable} from "./Quackable";
import {DuckCall, MallardDuck, RedheadDuck, RubberDuck} from "./ducks";

export class DuckFactory extends AbstractDuckFactory {
    createMallardDuck(): Quackable {
        return new MallardDuck();
    }

    createRedheadDuck(): Quackable {
        return new RedheadDuck();
    }

    createDuckCall(): Quackable {
        return new DuckCall();
    }

    createRubberDuck(): Quackable {
        return new RubberDuck();
    }
}
