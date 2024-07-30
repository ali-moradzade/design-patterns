import {Waitress} from "./Waitress";
import {PancakeHouseMenu} from "./PancakeHouseMenu";
import {DinerMenu} from "./DinerMenu";

function main() {
    const pancakeHouseMenu = new PancakeHouseMenu();
    const dinerMenu = new DinerMenu();

    const waitress = new Waitress(pancakeHouseMenu, dinerMenu);
    waitress.printMenu();
}

main();
