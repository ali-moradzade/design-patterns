import {Amplifier} from "./Amplifier";

export class Tuner {
    constructor(
        private amplifier: Amplifier,
    ) {
    }

    on() {
        console.log('Tuner on');
    }

    off() {
        console.log('Tuner off');
    }

    setAm() {
        console.log('Tuner setAm');
    }

    setFm() {
        console.log('Tuner setFm');
    }

    setFrequency() {
        console.log('Tuner setFrequency');
    }
}
