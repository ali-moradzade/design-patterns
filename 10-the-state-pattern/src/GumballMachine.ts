import {State} from './State';
import {NoQuarterState} from './NoQuarterState';
import {SoldOutState} from './SoldOutState';
import {HasQuarterState} from './HasQuarterState';
import {SoldState} from './SoldState';
import {WinnerState} from './WinnerState';

export class GumballMachine {
    private readonly soldOutState: State;
    private readonly noQuarterState: State;
    private readonly hasQuarterState: State;
    private readonly soldState: State;
    private readonly winnerState: State;
    
    private state: State;
    
    constructor(
        private count: number,
    ) {
        this.soldOutState = new SoldOutState(this);
        this.noQuarterState = new NoQuarterState(this);
        this.hasQuarterState = new HasQuarterState(this);
        this.soldState = new SoldState(this);
        this.winnerState = new WinnerState(this);
        
        if (count > 0) {
            this.state = this.noQuarterState;
        } else {
            this.state = this.soldOutState;
        }
    }
    
    insertQuarter() {
        this.state.insertQuarter();
    }
    
    ejectQuarter() {
        this.state.ejectQuarter();
    }
    
    turnCrank() {
        this.state.turnCrank();
        this.state.dispense();
    }
    
    setState(state: State) {
        this.state = state;
    }
    
    releaseBall() {
        console.log('A gumball comes rolling out the slot...');
        if (this.count > 0) {
            this.count--;
        }
    }
    
    print() {
        console.log('\nMighty Gumball, Inc.');
        console.log('Typescript-enabled Standing Gumball Model #2024');
        console.log(`Inventory: ${this.count} gumballs`);
        
        if (this.getState() === this.getNoQuarterState()) {
            console.log('Machine is waiting for quarter\n');
        } else {
            console.log('Machine is sold out\n');
        }
    }
    
    getState() {
        return this.state;
    }
    
    getCount() {
        return this.count;
    }
    
    getNoQuarterState() {
        return this.noQuarterState;
    }
    
    getHasQuarterState() {
        return this.hasQuarterState;
    }
    
    getSoldOutState() {
        return this.soldOutState;
    }
    
    getSoldState() {
        return this.soldState;
    }
    
    getWinnerState() {
        return this.winnerState;
    }
}
