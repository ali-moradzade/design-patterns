import {SimpleRemoteControl} from "./SimpleRemoteControl";
import {GarageDoor, Light} from "./vendors";
import {Command, GarageDoorOpenCommand, LightOnCommand} from "./commands";

function main() {
    const remote = new SimpleRemoteControl();

    const light = new Light();
    const lightOnCommand: Command = new LightOnCommand(light);

    remote.setCommand(lightOnCommand);
    remote.buttonWasPressed();

    const garageDoor = new GarageDoor();
    const garageDoorOpenCommand: Command = new GarageDoorOpenCommand(garageDoor);

    remote.setCommand(garageDoorOpenCommand);
    remote.buttonWasPressed();
}

main();