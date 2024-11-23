import {State} from './State';
import {GumballMachine} from './GumballMachine';

export class NoQuarterState implements State {
    constructor(
        private gumballMachine: GumballMachine,
    ) {
    }
    
    insertQuarter(): void {
        throw new Error('Method not implemented.');
    }
    ejectQuarter(): void {
        throw new Error('Method not implemented.');
    }
    turnCrank(): void {
        throw new Error('Method not implemented.');
    }
    dispense(): void {
        throw new Error('Method not implemented.');
    }
}
