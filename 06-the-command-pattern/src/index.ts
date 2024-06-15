import {RemoteControl} from "./RemoteControl";
import {CeilingFan, GarageDoor, Light, Stereo} from "./vendors";
import {
    CeilingFanOffCommand,
    CeilingFanOnCommand,
    Command,
    GarageDoorCloseCommand,
    GarageDoorOpenCommand,
    LightOffCommand,
    LightOnCommand,
    StereoOffCommand,
    StereoOnWithCDCommand
} from "./commands";

function main() {
    const remote = new RemoteControl();

    const livingRoomLight = new Light('Living Room');
    const livingRoomLightOn: Command = new LightOnCommand(livingRoomLight);
    const livingRoomLightOff: Command = new LightOffCommand(livingRoomLight);

    const kitchenLight = new Light('Kitchen');
    const kitchenLightOn: Command = new LightOnCommand(kitchenLight);
    const kitchenLightOff: Command = new LightOffCommand(kitchenLight);

    const ceilingFan = new CeilingFan();
    const ceilingFanOn: Command = new CeilingFanOnCommand(ceilingFan);
    const ceilingFanOff: Command = new CeilingFanOffCommand(ceilingFan);

    const garageDoor = new GarageDoor();
    const garageDoorOpen: Command = new GarageDoorOpenCommand(garageDoor);
    const garageDoorClose: Command = new GarageDoorCloseCommand(garageDoor);

    const stereo = new Stereo();
    const stereoOnWithCd: Command = new StereoOnWithCDCommand(stereo);
    const stereoOff: Command = new StereoOffCommand(stereo);

    const SLOTS = 5;

    remote.setCommand(0, livingRoomLightOn, livingRoomLightOff);
    remote.setCommand(1, kitchenLightOn, kitchenLightOff);
    remote.setCommand(2, ceilingFanOn, ceilingFanOff);
    remote.setCommand(3, garageDoorOpen, garageDoorClose);
    remote.setCommand(4, stereoOnWithCd, stereoOff);

    for (let i = 0; i < SLOTS; i++) {
        remote.onButtonWasPushed(i);
        remote.offButtonWasPushed(i);
    }

    remote.undoButtonWasPressed();
}

main();