import {Duck} from "./Duck";
import {Turkey} from "./Turkey";

export class TurkeyAdapter implements Duck {
    constructor(
        private turkey: Turkey,
    ) {
    }

    quack() {
        this.turkey.gobble();
    }

    fly() {
        for (let i = 0; i < 5; i++) {
            this.turkey.fly();
        }
    }
}
