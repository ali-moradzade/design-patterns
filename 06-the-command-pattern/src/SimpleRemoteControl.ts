import {Command} from "./commands";

export class SimpleRemoteControl {
    private slot: Command;

    setCommand(command: Command) {
        this.slot = command;
    }

    buttonWasPressed() {
        this.slot.execute();
    }
}
