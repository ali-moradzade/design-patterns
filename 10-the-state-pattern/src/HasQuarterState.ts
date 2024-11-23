import {State} from './State';
import {GumballMachine} from './GumballMachine';

export class HasQuarterState implements State {
    constructor(
        private gumballMachine: GumballMachine,
    ) {
    }
    
    insertQuarter() {
        console.log('You can\'t insert another quarter');
    }
    
    ejectQuarter() {
        console.log('Quarter returned');
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    }
    
    turnCrank() {
        console.log('You turned...');
        this.gumballMachine.setState(this.gumballMachine.getSoldState());
    }
    
    dispense() {
        console.log('No gumball dispensed');
    }
}
