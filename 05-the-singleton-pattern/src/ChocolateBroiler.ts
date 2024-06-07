export class ChocolateBroiler {
    private empty: boolean;
    private boiled: boolean;
    private static uniqueInstance: ChocolateBroiler;

    private constructor() {
        this.empty = true;
        this.boiled = false;
    }

    static getInstance(): ChocolateBroiler {
        if (!this.uniqueInstance) {
            this.uniqueInstance = new ChocolateBroiler();
        }

        return this.uniqueInstance;
    }

    fill() {
        if (this.isEmpty()) {
            this.empty = false;
            this.boiled = false;

            console.log('Fill the boiler with a milk/chocolate mixture');
        }
    }

    drain() {
        if (!this.isEmpty() && this.isBoiled()) {
            console.log('Drain the boiled milk and chocolate');
            this.empty = true;
        }
    }

    boil() {
        if (!this.isEmpty() && !this.isBoiled()) {
            console.log('Bring the contents to a boil');
            this.boiled = true;
        }
    }

    isEmpty() {
        return this.empty;
    }

    isBoiled() {
        return this.boiled;
    }
}
