import {RemoteControl} from "./RemoteControl";
import {GarageDoor, Light} from "./vendors";
import {Command, GarageDoorOpenCommand, LightOnCommand} from "./commands";

function main() {
    const remote = new RemoteControl();

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