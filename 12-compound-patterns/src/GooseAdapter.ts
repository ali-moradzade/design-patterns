import {Quackable} from "./Quackable";
import {Goose} from "./Goose";

export class GooseAdapter implements Quackable {
    constructor(
        private goose: Goose,
    ) {
    }

    quack() {
        this.goose.honk();
    }
}
