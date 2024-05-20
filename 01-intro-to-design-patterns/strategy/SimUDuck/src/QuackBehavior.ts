export interface QuackBehavior {
    quack(): void;
}

export class Quack implements QuackBehavior {
    quack() {
        console.log('quack');
    }
}

export class Squeak implements QuackBehavior {
    quack() {
        console.log('squeak');
    }
}

export class MuteQuack implements QuackBehavior {
    quack() {
        console.log('muteQuack');
    }
}
