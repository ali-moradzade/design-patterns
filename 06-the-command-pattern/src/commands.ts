import {Light} from "./vendors";

export interface Command {
    execute(): void;
}

export class LightOnCommand implements Command {
    constructor(
        private light: Light,
    ) {
    }

    execute() {
        this.light.on();
    }
}
