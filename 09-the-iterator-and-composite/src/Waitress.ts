import {PancakeHouseMenu} from "./PancakeHouseMenu";
import {DinerMenu} from "./DinerMenu";
import {MenuItem} from "./MenuItem";

export class Waitress {
    constructor(
        private pancakeHouseMenu: PancakeHouseMenu,
        private dinerMenu: DinerMenu,
    ) {
    }

    printMenu() {
        const pancakeIterator = this.pancakeHouseMenu.createIterator();
        const dinerIterator = this.dinerMenu.createIterator();

        console.log('MENU\n----\nBREAKFAST');
        this.printMenuHelper(pancakeIterator);
        console.log('\nLAUNCH');
        this.printMenuHelper(dinerIterator);
    }

    printMenuHelper(iterator: IterableIterator<MenuItem>) {
        for (let menuItem of iterator) {
            console.log(`${menuItem.getName()}, ${menuItem.getPrice()} \$ -- ${menuItem.getDescription()}`);
        }
    }
}
