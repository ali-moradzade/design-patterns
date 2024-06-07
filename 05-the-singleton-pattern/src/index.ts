import {ChocolateBroiler} from "./ChocolateBroiler";

function main() {
    const boiler = ChocolateBroiler.getInstance();

    boiler.fill();
    boiler.boil();
    boiler.drain();
}

main();
