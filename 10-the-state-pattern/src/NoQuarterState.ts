import {State} from './State';
import {GumballMachine} from './GumballMachine';

export class NoQuarterState implements State {
    constructor(
        private gumballMachine: GumballMachine,
    ) {
    }
    
    insertQuarter(): void {
        console.log('You inserted a quarter');
        this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
    }
    
    ejectQuarter(): void {
        console.log('You haven\'t inserted a quarter');
    }
    
    turnCrank(): void {
        console.log('You turned, but there\'s no quarter');
    }
    
    dispense(): void {
        console.log('You need to pay first');
    }
}
