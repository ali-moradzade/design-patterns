export class TheaterLights {
    on() {
        console.log('TheaterLights on');
    }

    off() {
        console.log('TheaterLights off');
    }

    dim(amount: number) {
        console.log(`TheaterLights dim: ${amount}`);
    }
}
