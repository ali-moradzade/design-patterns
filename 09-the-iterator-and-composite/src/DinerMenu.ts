import {MenuItem} from "./MenuItem";

export class DinerMenu {
    private MAX_ITEMS = 6;
    private numberOfItems = 0;
    private readonly menuItems: MenuItem[];

    constructor() {
        this.menuItems = [];

        this.addItem("Vegetarian BLT",
            "(Fakin') Bacon with lettuce & tomato on whole wheat", true, 2.99);

        this.addItem("BLT",
            "Bacon with lettuce & tomato on whole wheat", false, 2.99);

        this.addItem("Soup of the day",
            "Soup of the day, with a side of potato salad", false, 3.29);

        this.addItem("Hot dog",
            "A hot dog, with sauerkraut, relish, onions, topped with cheese",
            false, 3.05);
    }

    addItem(name: string, description: string, vegetarian: boolean, price: number) {
        const menuItem = new MenuItem(name, description, vegetarian, price);
        if (this.numberOfItems >= this.MAX_ITEMS) {
            console.log("Sorry menu is full! Can't add item to menu");
        } else {
            this.menuItems[this.numberOfItems] = menuItem;
            this.numberOfItems++;
        }
    }

    getMenuItems() {
        return this.menuItems;
    }
}
