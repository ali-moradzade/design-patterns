import {CaffeineBeverage} from "./CaffeineBeverage";

export class Tea extends CaffeineBeverage {
    prepareRecipe() {
        super.boilWater();
        this.steepTeaBag();
        super.pourInCup();
        this.addLemon();
    }

    steepTeaBag() {
        console.log('Steeping the tea');
    }

    addLemon() {
        console.log('Adding lemon');
    }
}
