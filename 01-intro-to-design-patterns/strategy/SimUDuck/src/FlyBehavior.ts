export interface FlyBehavior {
    fly(): void;
}

export class FlyWithWings implements FlyBehavior {
    fly() {
        console.log('fly with wings');
    }
}

export class FlyNoWay implements FlyBehavior {
    fly() {
        console.log('can not fly!');
    }
}

export class FlyRocketPowered implements FlyBehavior {
    fly() {
        console.log('fly with rocket');
    }
}
