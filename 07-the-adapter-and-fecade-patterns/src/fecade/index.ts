import {PopcornPopper} from "./PopcornPopper";
import {TheaterLights} from "./TheaterLights";
import {Screen} from "./Screen";
import {Projector} from "./Projector";
import {StreamingPlayer} from "./StreamingPlayer";
import {Amplifier} from "./Amplifier";

function main() {
    const popper = new PopcornPopper();
    popper.on();
    popper.pop();

    const lights = new TheaterLights();
    lights.dim(10);

    const screen = new Screen();
    screen.down();

    const amplifier = new Amplifier();
    const streamingPlayer = new StreamingPlayer(amplifier);
    const projector = new Projector(streamingPlayer);

    projector.on();
    projector.wideScreenMode();

    amplifier.on();
    amplifier.setSurroundedSound();
    amplifier.setVolume(5);

    const movie = 'Movie';
    streamingPlayer.on();
    streamingPlayer.play(movie);
}

main();
