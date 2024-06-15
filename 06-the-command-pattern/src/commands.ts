import {CeilingFan, GarageDoor, Light, Stereo} from "./vendors";

export interface Command {
    execute(): void;
}

export class NoCommand implements Command {
    execute() {
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
}

export class LightOffCommand implements Command {
    constructor(
        private light: Light,
    ) {
    }

    execute() {
        this.light.off();
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
}

export class GarageDoorCloseCommand implements Command {
    constructor(
        private garageDoor: GarageDoor,
    ) {
    }

    execute() {
        this.garageDoor.down();
    }
}

export class CeilingFanOnCommand implements Command {
    constructor(
        private ceilingFan: CeilingFan,
    ) {
    }

    execute() {
        this.ceilingFan.medium();
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
}

export class StereoOnCommand implements Command {
    constructor(
        private stereo: Stereo,
    ) {
    }

    execute() {
        this.stereo.on();
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
}
