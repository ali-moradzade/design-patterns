import {RemoteControl} from "./RemoteControl";
import {CeilingFan, GarageDoor, Hottub, Light, Stereo, TV} from "./vendors";
import {
    CeilingFanHighCommand,
    CeilingFanOffCommand,
    Command,
    GarageDoorCloseCommand,
    GarageDoorOpenCommand,
    HottubOffCommand,
    HottubOnCommand,
    LightOffCommand,
    LightOnCommand,
    MacroCommand,
    StereoOffCommand,
    StereoOnCommand,
    StereoOnWithCDCommand,
    TvOffCommand,
    TvOnCommand
} from "./commands";

function main() {
    const remote = new RemoteControl();

    const livingRoomLight = new Light('Living Room');
    const livingRoomLightOn: Command = new LightOnCommand(livingRoomLight);
    const livingRoomLightOff: Command = new LightOffCommand(livingRoomLight);

    const kitchenLight = new Light('Kitchen');
    const kitchenLightOn: Command = new LightOnCommand(kitchenLight);
    const kitchenLightOff: Command = new LightOffCommand(kitchenLight);

    const ceilingFan = new CeilingFan("Living Room");
    const ceilingFanOn: Command = new CeilingFanHighCommand(ceilingFan);
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

    console.log('-------------');

    // Check ceiling fan multi state undo ability
    remote.offButtonWasPushed(2);
    remote.undoButtonWasPressed();
    remote.onButtonWasPushed(2);

    console.log('-------------');

    const light = new Light('Living Room');
    const lightOn: Command = new LightOnCommand(light);
    const lightOff: Command = new LightOffCommand(light);

    const tv = new TV('Living Room');
    const tvOn: Command = new TvOnCommand(tv);
    const tvOff: Command = new TvOffCommand(tv);

    const stereo2 = new Stereo();
    const stereoOn2: Command = new StereoOnCommand(stereo2);
    const stereoOff2: Command = new StereoOffCommand(stereo2);

    const hottub = new Hottub();
    const hottubOn: Command = new HottubOnCommand(hottub);
    const hottubOff: Command = new HottubOffCommand(hottub);

    const partyOn: Command[] = [
        lightOn,
        stereoOn2,
        tvOn,
        hottubOn,
    ];
    const partyOff: Command[] = [
        lightOff,
        stereoOff2,
        tvOff,
        hottubOff,
    ];

    const partyOnMacro = new MacroCommand(partyOn);
    const partyOffMacro = new MacroCommand(partyOff);

    remote.setCommand(0, partyOnMacro, partyOffMacro);
    remote.onButtonWasPushed(0);
    remote.offButtonWasPushed(0);
}

main();