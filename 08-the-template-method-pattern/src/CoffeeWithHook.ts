import {CaffeineBeverage} from "./CaffeineBeverageWithHook";

export class Coffee extends CaffeineBeverage {
    brew() {
        console.log('Dripping Coffee through filter');
    }

    addCondiments() {
        console.log('Adding sugar and milk');
    }

    customerWantsCondiments(): boolean {
        // Get user input
        const answer = 'yes';

        return answer.toLowerCase().startsWith('y');
    }
}
