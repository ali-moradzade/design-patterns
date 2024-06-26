import {CaffeineBeverage} from "./CaffeineBeverage";

export class Coffee extends CaffeineBeverage {
    prepareRecipe() {
        super.boilWater();
        this.brewCoffeeGrinds();
        super.pourInCup();
        this.addSugarAndMilk();
    }

    brewCoffeeGrinds() {
        console.log('Dripping Coffee through filter');
    }

    addSugarAndMilk() {
        console.log('Adding sugar and milk');
    }
}
