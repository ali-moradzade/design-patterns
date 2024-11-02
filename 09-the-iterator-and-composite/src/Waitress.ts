import {MenuItem} from "./MenuItem";
import {Menu} from "./Menu";

export class Waitress {
    constructor(
        private menus: Menu[],
    ) {
    }

    printMenu() {
        for (let menu of this.menus) {
            this.printMenuHelper(menu.createIterator());
        }
    }

    printMenuHelper(iterator: IterableIterator<MenuItem>) {
        for (let menuItem of iterator) {
            console.log(`${menuItem.getName()}, \$${menuItem.getPrice()} -- ${menuItem.getDescription()}`);
        }
    }
}
