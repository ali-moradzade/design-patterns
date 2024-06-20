import {Amplifier} from "./Amplifier";
import {StreamingPlayer} from "./StreamingPlayer";
import {Projector} from "./Projector";
import {TheaterLights} from "./TheaterLights";
import {PopcornPopper} from "./PopcornPopper";
import {Screen} from "./Screen";

export class HomeTheaterFecade {

    constructor(
        private amplifier: Amplifier,
        private lights: TheaterLights,
        private screen: Screen,
        private popper: PopcornPopper,
        private streamingPlayer: StreamingPlayer,
        private projector: Projector,
    ) {
    }

    watchMovie(movie: string) {
        console.log('Get ready to watch a movie ...');

        this.popper.on();
        this.popper.pop();

        this.lights.dim(10);

        this.screen.down();

        this.projector.on();
        this.projector.wideScreenMode();

        this.amplifier.on();
        this.amplifier.setSurroundedSound();
        this.amplifier.setVolume(5);

        this.streamingPlayer.on();
        this.streamingPlayer.play(movie);
    }

    endMovie() {
        console.log('Shutting movie theater down ...');

        this.popper.off();
        this.lights.on();
        this.screen.up();
        this.projector.off();
        this.amplifier.off();
        this.streamingPlayer.stop();
        this.streamingPlayer.off();
    }
}
