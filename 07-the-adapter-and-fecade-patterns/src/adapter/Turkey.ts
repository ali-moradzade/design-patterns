export interface Turkey {
    gobble(): void;

    fly(): void;
}

export class WildTurkey implements Turkey {
    gobble() {
        console.log('Gobble gobble');
    }

    fly() {
        console.log("I'm flying a short distance");
    }
}
