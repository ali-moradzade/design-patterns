import {Character, King} from "./Character";
import {BowAndArrowBehavior} from "./WeaponBehavior";

function main() {
    const character: Character = new King();
    character.fight();

    character.setWeaponBehavior(new BowAndArrowBehavior());
    character.fight();
}

main();
