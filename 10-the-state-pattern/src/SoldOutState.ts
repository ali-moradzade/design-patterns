import {State} from './State';
import {GumballMachine} from './GumballMachine';

export class SoldOutState implements State {
    constructor(
        private gumballMachine: GumballMachine,
    ) {
    }
    
    insertQuarter() {
        console.log('You can\'t insert a quarter, the machine is sold out');
    }
    
    ejectQuarter() {
        console.log('You can\'t eject, you haven\'t inserted a quarter yet');
    }
    
    turnCrank() {
        console.log('You turned, but there are no gumballs');
    }
    
    dispense() {
        console.log('No gumball dispensed');
    }
}
