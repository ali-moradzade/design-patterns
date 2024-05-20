export abstract class Duck {
    swim() {
        console.log('swim');
    }

    abstract display(): void
}

export interface Flyable {
    fly(): void;
}

export interface Quackable {
    quack(): void;
}

export class MallardDuck extends Duck implements Flyable, Quackable {
    display(): void {
        console.log('MallardDuck');
    }

    fly(): void {
        console.log('fly');
    }

    quack(): void {
        console.log('quack');
    }
}

export class RedheadDuck extends Duck implements Flyable, Quackable {
    display(): void {
        console.log('RedheadDuck');
    }

    fly(): void {
        console.log('fly');
    }

    quack(): void {
        console.log('quack');
    }
}

export class RubberDuck extends Duck implements Quackable {
    quack() {
        console.log('squeak');
    }

    display(): void {
        console.log('RubberDuck');
    }
}

export class DecoyDuck extends Duck {
    display(): void {
        console.log('DecoyDuck');
    }
}
