export abstract class CaffeineBeverage {
    abstract prepareRecipe(): void;

    boilWater() {
        console.log('Boiling water');
    }

    pourInCup() {
        console.log('Pouring into cup');
    }
}
