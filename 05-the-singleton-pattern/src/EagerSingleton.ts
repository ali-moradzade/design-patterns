export class EagerSingleton {
    private static uniqueInstance: EagerSingleton = new EagerSingleton();

    private constructor() {
    }

    static getInstance(): EagerSingleton {
        return this.uniqueInstance;
    }
}
