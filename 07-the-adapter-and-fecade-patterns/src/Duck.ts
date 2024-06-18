export interface Duck {
    quack(): void;

    fly(): void;
}

export class MallardDuck implements Duck {
    quack() {
        console.log('Quack');
    }

    fly() {
        console.log("I'm flying");
    }
}
