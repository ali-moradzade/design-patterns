import {MenuItem} from "./MenuItem";

export interface Iterator {
    hasNext(): boolean;

    next(): MenuItem;
}

export class DinerMenuIterator implements Iterator {
    position = 0;

    constructor(
        private items: MenuItem[],
    ) {
    }

    next(): MenuItem {
        const item = this.items[this.position];
        this.position++;

        return item;
    }

    hasNext(): boolean {
        return !(this.position >= this.items.length || this.items[this.position] === undefined);
    }
}
