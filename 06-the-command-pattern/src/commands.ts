import {CeilingFan, CeilingFanSpeed, GarageDoor, Hottub, Light, Stereo, TV} from "./vendors";

export interface Command {
    execute(): void;

    undo(): void;
}

export class MacroCommand implements Command {
    constructor(
        private commands: Command[],
    ) {
    }

    execute() {
        for (let command of this.commands) {
            command.execute();
        }
    }

    undo() {
        for (let i = this.commands.length - 1; i >= 0; i--) {
            this.commands[i].undo();
        }
    }
}

export class NoCommand implements Command {
    execute() {
        // do nothing
    }

    undo() {
        // do nothing
    }
}

export class LightOnCommand implements Command {
    constructor(
        private light: Light,
    ) {
    }

    execute() {
        this.light.on();
    }

    undo() {
        this.light.off();
    }
}

export class LightOffCommand implements Command {
    constructor(
        private light: Light,
    ) {
    }

    execute() {
        this.light.off();
    }

    undo() {
        this.light.on();
    }
}

export class GarageDoorOpenCommand implements Command {
    constructor(
        private garageDoor: GarageDoor,
    ) {
    }

    execute() {
        this.garageDoor.up();
    }

    undo() {
        this.garageDoor.down();
    }
}

export class GarageDoorCloseCommand implements Command {
    constructor(
        private garageDoor: GarageDoor,
    ) {
    }

    execute() {
        this.garageDoor.down();
    }

    undo() {
        this.garageDoor.up();
    }
}

export class CeilingFanHighCommand implements Command {
    private prevSpeed: CeilingFanSpeed;

    constructor(
        private ceilingFan: CeilingFan,
    ) {
    }

    execute() {
        this.prevSpeed = this.ceilingFan.getSpeed();
        this.ceilingFan.medium();
    }

    undo() {
        if (this.prevSpeed === CeilingFanSpeed.HIGH) {
            this.ceilingFan.high();
        } else if (this.prevSpeed === CeilingFanSpeed.MEDIUM) {
            this.ceilingFan.medium();
        } else if (this.prevSpeed === CeilingFanSpeed.LOW) {
            this.ceilingFan.low();
        } else if (this.prevSpeed === CeilingFanSpeed.OFF) {
            this.ceilingFan.off();
        }
    }
}

export class CeilingFanOffCommand implements Command {
    constructor(
        private ceilingFan: CeilingFan,
    ) {
    }

    execute() {
        this.ceilingFan.off();
    }

    undo() {
        this.ceilingFan.medium();
    }
}

export class StereoOnCommand implements Command {
    constructor(
        private stereo: Stereo,
    ) {
    }

    execute() {
        this.stereo.on();
    }

    undo() {
        this.stereo.off();
    }
}

export class StereoOffCommand implements Command {
    constructor(
        private stereo: Stereo,
    ) {
    }

    execute() {
        this.stereo.off();
    }

    undo() {
        this.stereo.on();
    }
}

export class StereoOnWithCDCommand implements Command {
    constructor(
        private stereo: Stereo,
    ) {
    }

    execute() {
        this.stereo.on();
        this.stereo.setCd();
        this.stereo.setVolume(12);
    }

    undo() {
        this.stereo.off();
    }
}

export class TvOnCommand implements Command {
    constructor(
        private tv: TV,
    ) {
    }

    execute() {
        this.tv.on();
    }

    undo() {
        this.tv.off();
    }
}

export class TvOffCommand implements Command {
    constructor(
        private tv: TV,
    ) {
    }

    execute() {
        this.tv.off();
    }

    undo() {
        this.tv.on();
    }
}

export class HottubOnCommand implements Command {
    constructor(
        private hottub: Hottub,
    ) {
    }

    execute() {
        this.hottub.jetsOn();
    }

    undo() {
        this.hottub.jetsOff();
    }
}

export class HottubOffCommand implements Command {
    constructor(
        private hottub: Hottub,
    ) {
    }

    execute() {
        this.hottub.jetsOff();
    }

    undo() {
        this.hottub.jetsOn();
    }
}
