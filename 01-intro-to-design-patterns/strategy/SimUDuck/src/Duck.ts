import {FlyBehavior, FlyNoWay, FlyWithWings} from "./FlyBehavior";
import {MuteQuack, Quack, QuackBehavior, Squeak} from "./QuackBehavior";

export abstract class Duck {
    flyBehavior: FlyBehavior;
    quackBehavior: QuackBehavior;

    constructor(quackBehavior: QuackBehavior, flyBehavior: FlyBehavior) {
        this.quackBehavior = quackBehavior;
        this.flyBehavior = flyBehavior;
    }

    setFlyBehavior(fb: FlyBehavior) {
        this.flyBehavior = fb;
    }

    setQuackBehavior(qb: QuackBehavior) {
        this.quackBehavior = qb;
    }

    performQuack() {
        this.quackBehavior.quack();
    }

    performFly() {
        this.flyBehavior.fly();
    }

    swim() {
        console.log('swim');
    }

    abstract display(): void
}

export class MallardDuck extends Duck {
    constructor() {
        super(new Quack(), new FlyWithWings());
    }

    display(): void {
        console.log('MallardDuck');
    }
}

export class RedheadDuck extends Duck {
    constructor() {
        super(new Quack(), new FlyWithWings());
    }

    display(): void {
        console.log('RedheadDuck');
    }
}

export class RubberDuck extends Duck {
    constructor() {
        super(new Squeak(), new FlyNoWay());
    }

    display(): void {
        console.log('RubberDuck');
    }
}

export class DecoyDuck extends Duck {
    constructor() {
        super(new MuteQuack(), new FlyNoWay());
    }

    display(): void {
        console.log('DecoyDuck');
    }
}

export class ModelDuck extends Duck {
    constructor() {
        super(new Quack(), new FlyNoWay());
    }

    display(): void {
        console.log('ModelDuck');
    }
}
