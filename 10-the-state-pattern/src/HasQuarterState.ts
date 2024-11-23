import {State} from './State';
import {GumballMachine} from './GumballMachine';

export class HasQuarterState implements State {
    constructor(
        private gumballMachine: GumballMachine,
    ) {
    }
    
    /**
     * Returns true with chance of 10%
     */
    private randomWinner() {
        return Math.random() < 0.1;
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
        const winner = this.randomWinner();
        
        if (winner && (this.gumballMachine.getCount() > 1)) {
            this.gumballMachine.setState(this.gumballMachine.getWinnerState());
        } else {
            this.gumballMachine.setState(this.gumballMachine.getSoldState());
        }
    }
    
    dispense() {
        console.log('No gumball dispensed');
    }
}
