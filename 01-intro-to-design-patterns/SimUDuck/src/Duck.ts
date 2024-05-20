export abstract class Duck {
    quack() {
        console.log('quack');
    }

    swim() {
        console.log('swim');
    }

    fly() {
        console.log('fly');
    }

    abstract display(): void
}

export class MallardDuck extends Duck {
    display(): void {
        console.log('MallardDuck');
    }
}

export class RedheadDuck extends Duck {
    display(): void {
        console.log('RedheadDuck');
    }
}

export class RubberDuck extends Duck {
    quack() {
        console.log('squeak');
    }

    fly() {
        // do nothing
    }

    display(): void {
        console.log('RubberDuck');
    }
}

export class DecoyDuck extends Duck {
    quack() {
        // do nothing
    }

    fly() {
        // do nothing
    }

    display(): void {
        console.log('DecoyDuck');
    }
}
