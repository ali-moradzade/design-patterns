import {MenuItem} from "./MenuItem";
import {Menu} from "./Menu";

export class Waitress {
    constructor(
        private pancakeHouseMenu: Menu,
        private dinerMenu: Menu,
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
