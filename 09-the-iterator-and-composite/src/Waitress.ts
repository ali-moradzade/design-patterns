import {PancakeHouseMenu} from "./PancakeHouseMenu";
import {DinerMenu} from "./DinerMenu";
import {Iterator} from './Iterator';

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

    printMenuHelper(iterator: Iterator) {
        while (iterator.hasNext()) {
            const menuItem = iterator.next();
            console.log(`${menuItem.getName()}, ${menuItem.getPrice()} \$ -- ${menuItem.getDescription()}`);
        }
    }
}
