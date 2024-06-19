import {Amplifier} from "./Amplifier";

export class StreamingPlayer {
    constructor(
        private amplifier: Amplifier,
    ) {
    }

    on() {
        console.log('StreamingPlayer on');
    }

    off() {
        console.log('StreamingPlayer off');
    }

    pause() {
        console.log('StreamingPlayer pause');
    }

    play() {
        console.log('StreamingPlayer play');
    }

    stop() {
        console.log('StreamingPlayer stop');
    }
}
