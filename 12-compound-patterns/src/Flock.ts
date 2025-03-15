import {Quackable} from "./Quackable";

export class Flock implements Quackable {
    private quackers: Quackable[] = [];

    add(quacker: Quackable) {
        this.quackers.push(quacker);
    }

    quack(): void {
        for (const quacker of this.quackers) {
            quacker.quack();
        }
    }
}
