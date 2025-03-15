import {Quackable} from "./Quackable";

export class QuackCounter implements Quackable {
    private static numberOfDucks = 0;

    constructor(
        private duck: Quackable
    ) {
    }

    quack() {
        this.duck.quack();
        QuackCounter.numberOfDucks++;
    }

    static getQuacks() {
        return QuackCounter.numberOfDucks;
    }
}
