import {PancakeHouseMenu} from "./PancakeHouseMenu";
import {DinerMenu} from "./DinerMenu";

export class Waitress {
    printMenu() {
        const pancakeHouseMenu = new PancakeHouseMenu();
        const breakfastItems = pancakeHouseMenu.getMenuItems();

        const dinerMenu = new DinerMenu();
        const lunchItems = dinerMenu.getMenuItems();

        for (let menuItem of breakfastItems) {
            console.log(`${menuItem.getName()} ${menuItem.getPrice()}`);
            console.log(menuItem.getDescription());
        }

        for (let menuItem of lunchItems) {
            console.log(`${menuItem.getName()} ${menuItem.getPrice()}`);
            console.log(menuItem.getDescription());
        }
    }
}
