import {StreamingPlayer} from "./StreamingPlayer";

export class Projector {
    constructor(
        private streamingPlayer: StreamingPlayer,
    ) {
    }

    on() {
        console.log('Projector on');
    }

    off() {
        console.log('Projector off');
    }

    tvMode() {
        console.log('Projector tvMode');
    }

    wideScreenMode() {
        console.log('Projector wideScreenMode');
    }
}
