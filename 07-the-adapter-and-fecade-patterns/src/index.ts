import {Duck, MallardDuck} from "./Duck";
import {Turkey, WildTurkey} from "./Turkey";
import {TurkeyAdapter} from "./TurkeyAdapter";

function main() {
    const duck: Duck = new MallardDuck();
    const turkey: Turkey = new WildTurkey();

    const turkeyAdapter: Duck = new TurkeyAdapter(turkey);

    console.log('The Turkey says ...');
    turkey.gobble();
    turkey.fly();

    console.log('\nThe Duck says ...');
    duck.quack();
    duck.fly();

    console.log('\nThe TurkeyAdapter says ...');
    turkeyAdapter.quack();
    turkeyAdapter.fly();
}

main();
