import {MenuComponent} from "./MenuComponent";

export class Menu extends MenuComponent {
    private menuComponents: MenuComponent[] = [];

    constructor(
        private name: string,
        private description: string,
    ) {
        super();
    }

    add(menuComponent: MenuComponent) {
        this.menuComponents.push(menuComponent);
    }

    remove(menuComponent: MenuComponent) {
        const index = this.menuComponents.indexOf(menuComponent);
        if (index > -1) {
            this.menuComponents.splice(index, -1);
        }
    }

    getChild(index: number) {
        return this.menuComponents[index];
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    print() {
        console.log(`\n${this.getName()}, ${this.getDescription()}`);
        console.log('---------------------');

        for (let menuComponent of this.menuComponents) {
            menuComponent.print();
        }
    }
}
