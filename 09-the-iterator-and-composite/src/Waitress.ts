import {MenuComponent} from "./MenuComponent";

export class Waitress {
    constructor(
        private allMenus: MenuComponent,
    ) {
    }

    printMenu() {
        this.allMenus.print();
    }
}
