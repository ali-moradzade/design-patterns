import {State} from './State';
import {NoQuarterState} from './NoQuarterState';
import {SoldOutState} from './SoldOutState';
import {HasQuarterState} from './HasQuarterState';
import {SoldState} from './SoldState';

export class GumballMachine {
    private readonly soldOutState: State;
    private readonly noQuarterState: State;
    private readonly hasQuarterState: State;
    private readonly soldState: State;
    
    private state: State;
    
    constructor(
        private count: number,
    ) {
        this.soldOutState = new SoldOutState(this);
        this.noQuarterState = new NoQuarterState(this);
        this.hasQuarterState = new HasQuarterState(this);
        this.soldOutState = new SoldState(this);
        
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
}
