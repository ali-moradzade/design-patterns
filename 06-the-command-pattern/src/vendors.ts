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
        console.log('Stereo setVolume');
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
    on() {
        console.log('TV on');
    }

    off() {
        console.log('TV off');
    }

    setInputChannel() {
        console.log('TV setInputChannel');
    }

    setVolume() {
        console.log('TV setVolume');
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
    on() {
        console.log('Light on');
    }

    off() {
        console.log('Light off');
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

export class CeilingFan {
    high() {
        console.log('CeilingFan high');
    }

    medium() {
        console.log('CeilingFan medium');
    }

    low() {
        console.log('CeilingFan low');
    }

    off() {
        console.log('CeilingFan off');
    }

    getSpeed() {
        console.log('CeilingFan getSpeed');
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
