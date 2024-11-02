import {Waitress} from "./Waitress";
import {PancakeHouseMenu} from "./PancakeHouseMenu";
import {DinerMenu} from "./DinerMenu";
import {CafeMenu} from "./CafeMenu";

function main() {
    const pancakeHouseMenu = new PancakeHouseMenu();
    const dinerMenu = new DinerMenu();
    const cafeMenu = new CafeMenu();

    const waitress = new Waitress(pancakeHouseMenu, dinerMenu, cafeMenu);
    waitress.printMenu();
}

main();
