export class ApplianceControl {
    on() {
        console.log('ApplianceControl on');
    }

    off() {
        console.log('ApplianceControl off');
    }
}

export class Stereo {
    on() {
        console.log('Stereo on');
    }

    off() {
        console.log('Stereo off');
    }

    setCd() {
        console.log('Stereo setCd');
    }

    setDvd() {
        console.log('Stereo setDvd');
    }

    setRadio() {
        console.log('Stereo setRadio');
    }

    setVolume(volume: number) {
        console.log(`Stereo setVolume ${volume}`);
    }
}

export class FaucetControl {
    openValve() {
        console.log('FaucetControl openValve');
    }

    closeValve() {
        console.log('FaucetControl closeValve');
    }
}

export class TV {
    constructor(
        private location: string,
    ) {
    }

    on() {
        console.log(`${this.location} TV on`);
    }

    off() {
        console.log(`${this.location} TV off`);
    }

    setInputChannel() {
        console.log(`${this.location} TV setInputChannel`);
    }

    setVolume(volume: number) {
        console.log(`${this.location} TV setVolume ${volume}`);
    }
}

export class CeilingLight {
    on() {
        console.log('CeilingLight on');
    }

    off() {
        console.log('CeilingLight off');
    }

    dim() {
        console.log('CeilingLight dim');
    }
}

export class OutdoorLight {
    on() {
        console.log('OutdoorLight on');
    }

    off() {
        console.log('OutdoorLight off');
    }
}

export class Hottub {
    circulate() {
        console.log('Hottub circulate');
    }

    jetsOn() {
        console.log('Hottub jetsOn');
    }

    jetsOff() {
        console.log('Hottub jetsOff');
    }

    setTemperature() {
        console.log('Hottub setTemperature');
    }
}

export class Thermostat {
    setThermostat() {
        console.log('Thermostat setThermostat');
    }
}

export class SecurityControl {
    arm() {
        console.log('SecurityControl arm');
    }

    disarm() {
        console.log('SecurityControl disarm');
    }
}

export class GarageDoor {
    up() {
        console.log('GarageDoor up');
    }

    down() {
        console.log('GarageDoor down');
    }

    stop() {
        console.log('GarageDoor stop');
    }

    lightOn() {
        console.log('GarageDoor lightOn');
    }

    lightOff() {
        console.log('GarageDoor lightOff');
    }
}

export class Light {
    constructor(
        private name: string
    ) {
    }

    on() {
        console.log(`${this.name} Light on`);
    }

    off() {
        console.log(`${this.name} Light off`);
    }
}

export class Sprinkler {
    waterOn() {
        console.log('Sprinkler waterOn');
    }

    waterOff() {
        console.log('Sprinkler waterOff');
    }
}

export enum CeilingFanSpeed {
    OFF,
    LOW,
    MEDIUM,
    HIGH
}

export class CeilingFan {
    private speed: CeilingFanSpeed;

    constructor(
        private location: string
    ) {
        this.speed = CeilingFanSpeed.HIGH;
    }

    high() {
        this.speed = CeilingFanSpeed.HIGH;
        console.log('CeilingFan high');
    }

    medium() {
        this.speed = CeilingFanSpeed.MEDIUM;
        console.log('CeilingFan medium');
    }

    low() {
        this.speed = CeilingFanSpeed.LOW;
        console.log('CeilingFan low');
    }

    off() {
        this.speed = CeilingFanSpeed.OFF;
        console.log('CeilingFan off');
    }

    getSpeed() {
        return this.speed;
    }
}

export class GardenLight {
    setDuskTime() {
        console.log('GardenLight setDuskTime');
    }

    setDownTime() {
        console.log('GardenLight setDownTime');
    }

    manualOn() {
        console.log('GardenLight manualOn');
    }

    manualOff() {
        console.log('GardenLight manualOff');
    }
}
