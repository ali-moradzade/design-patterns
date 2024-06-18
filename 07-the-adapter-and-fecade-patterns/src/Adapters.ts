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

export class DuckAdapter implements Turkey {
    constructor(
        private duck: Duck,
    ) {
    }

    private static randomIntFromInterval(min: number, max: number) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    gobble() {
        this.duck.quack();
    }

    fly() {
        const random = DuckAdapter.randomIntFromInterval(0, 5);
        if (random === 0) {
            this.duck.fly();
        }
    }
}
