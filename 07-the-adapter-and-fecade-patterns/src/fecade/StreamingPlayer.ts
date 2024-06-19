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

    play(movie: string) {
        console.log(`StreamingPlayer playing: ${movie}`);
    }

    stop() {
        console.log('StreamingPlayer stop');
    }
}
