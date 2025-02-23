import {Quackable} from "./Quackable";

export class MallardDuck implements Quackable {
    quack() {
        console.log('Quack');
    }
}

export class RedheadDuck implements Quackable {
    quack() {
        console.log('Quack');
    }
}

export class DuckCall implements Quackable {
    quack() {
        console.log('Kwak');
    }
}

export class RubberDuck implements Quackable {
    quack() {
        console.log('Squeak');
    }
}
