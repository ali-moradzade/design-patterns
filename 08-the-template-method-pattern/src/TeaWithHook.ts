import {CaffeineBeverage} from "./CaffeineBeverageWithHook";

export class Tea extends CaffeineBeverage {
    brew() {
        console.log('Steeping the tea');
    }

    addCondiments() {
        console.log('Adding lemon');
    }

    customerWantsCondiments(): boolean {
        // Get user input
        const answer = 'no';

        return answer.toLowerCase().startsWith('y');
    }
}
