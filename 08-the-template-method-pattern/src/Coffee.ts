import {CaffeineBeverage} from "./CaffeineBeverage";

export class Coffee extends CaffeineBeverage {
    brew() {
        console.log('Dripping Coffee through filter');
    }

    addCondiments() {
        console.log('Adding sugar and milk');
    }
}
