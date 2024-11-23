import {GumballMachine} from './GumballMachine';

function main() {
    const gumballMachine = new GumballMachine(5);
    
    gumballMachine.print();
    
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    
    gumballMachine.print();
    
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    
    gumballMachine.print();
}

main();
