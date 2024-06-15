import {Command, NoCommand} from "./commands";

export class RemoteControl {
    private readonly onCommands: Command[];
    private readonly offCommands: Command[];

    static readonly SLOTS = 7;

    constructor() {
        this.onCommands = [];
        this.offCommands = [];

        const noCommand: Command = new NoCommand();

        for (let i = 0; i < RemoteControl.SLOTS; i++) {
            this.onCommands[i] = noCommand;
            this.offCommands[i] = noCommand;
        }
    }

    setCommand(slot: number, onCommand: Command, offCommand: Command) {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    onButtonWasPushed(slot: number) {
        this.onCommands[slot].execute();
    }

    offButtonWasPushed(slot: number) {
        this.offCommands[slot].execute();
    }
}
