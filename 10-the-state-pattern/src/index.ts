import {GumballMachine} from './GumballMachine';

function main() {
    const gumballMachine = new GumballMachine(5);
    
    gumballMachine.print();
    
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    
    gumballMachine.print();
    
    gumballMachine.insertQuarter();
    gumballMachine.rejectQuarter();
    gumballMachine.turnCrank();
    
    gumballMachine.print();
    
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.rejectQuarter();
    
    gumballMachine.print();
    
    gumballMachine.insertQuarter();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    
    gumballMachine.print();
}

main();
