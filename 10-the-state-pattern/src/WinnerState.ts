import {State} from './State';
import {GumballMachine} from './GumballMachine';

export class WinnerState implements State {
    constructor(
        private gumballMachine: GumballMachine,
    ) {
    }
    
    insertQuarter() {
        console.log('Please wait, we are already giving you a gumball');
    }
    
    ejectQuarter() {
        console.log('Sorry, you already turned the crank');
    }
    
    turnCrank() {
        console.log('Turning twice doesn\'t get you another gumball!');
    }
    
    dispense() {
        this.gumballMachine.releaseBall();
        if (this.gumballMachine.getCount() == 0) {
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
        } else {
            this.gumballMachine.releaseBall();
            console.log('YOU\'RE A WINNER! you got two gumballs for your quarter');
            if (this.gumballMachine.getCount() > 0) {
                this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
            } else {
                console.log('Oops, out of gumballs!');
                this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
            }
        }
    }
}
