export class Amplifier {
    on() {
        console.log('Amplifier on');
    }

    off() {
        console.log('Amplifier off');
    }

    setSurroundedSound() {
        console.log('Amplifier setSurroundedSound');
    }

    setVolume(amount: number) {
        console.log(`Amplifier setVolume: ${amount}`);
    }
}
