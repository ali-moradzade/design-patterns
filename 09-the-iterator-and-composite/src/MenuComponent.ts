export abstract class MenuComponent {
    add(menuComponent: MenuComponent) {
        this.throwUnsupportedException();
    }

    remove(menuComponent: MenuComponent) {
        this.throwUnsupportedException();
    }

    getChild(index: number): MenuComponent {
        throw new Error('UnsupportedOperationException');
    }

    getName() {
        this.throwUnsupportedException();
    }

    getDescription() {
        this.throwUnsupportedException();
    }

    getPrice() {
        this.throwUnsupportedException();
    }

    isVegetarian() {
        this.throwUnsupportedException();
    }

    print() {
        this.throwUnsupportedException();
    }

    private throwUnsupportedException() {
        throw new Error('UnsupportedOperationException');
    }
}
