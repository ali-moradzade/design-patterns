import {PopcornPopper} from "./PopcornPopper";
import {TheaterLights} from "./TheaterLights";
import {Screen} from "./Screen";
import {Projector} from "./Projector";
import {StreamingPlayer} from "./StreamingPlayer";
import {Amplifier} from "./Amplifier";
import {HomeTheaterFecade} from "./HomeTheaterFecade";

function main() {
    const amplifier = new Amplifier();
    const lights = new TheaterLights();
    const screen = new Screen();
    const popper = new PopcornPopper();
    const streamingPlayer = new StreamingPlayer(amplifier);
    const projector = new Projector(streamingPlayer);

    const homeTheaterFecade = new HomeTheaterFecade(
        amplifier,
        lights,
        screen,
        popper,
        streamingPlayer,
        projector,
    );

    homeTheaterFecade.watchMovie('Raiders of the Lost Ark');

    console.log();
    homeTheaterFecade.endMovie();
}

main();
