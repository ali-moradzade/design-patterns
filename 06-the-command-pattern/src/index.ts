import {SimpleRemoteControl} from "./SimpleRemoteControl";
import {Light} from "./vendors";
import {Command, LightOnCommand} from "./commands";

function main() {
    const remote = new SimpleRemoteControl();
    const light = new Light()
    const lightOnCommand: Command = new LightOnCommand(light);

    remote.setCommand(lightOnCommand)
    remote.buttonWasPressed();
}

main();