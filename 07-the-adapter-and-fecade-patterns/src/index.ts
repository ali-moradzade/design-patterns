import {Duck, MallardDuck} from "./Duck";
import {Turkey, WildTurkey} from "./Turkey";
import {DuckAdapter, TurkeyAdapter} from "./Adapters";

function main() {
    const duck: Duck = new MallardDuck();
    const turkey: Turkey = new WildTurkey();

    const turkeyAdapter: Duck = new TurkeyAdapter(turkey);
    const duckAdapter: Turkey = new DuckAdapter(duck);

    console.log('The Turkey says ...');
    turkey.gobble();
    turkey.fly();

    console.log('\nThe Duck says ...');
    duck.quack();
    duck.fly();

    console.log('\nThe TurkeyAdapter says ...');
    turkeyAdapter.quack();
    turkeyAdapter.fly();

    console.log('\nThe DuckAdapter says ...');
    duckAdapter.gobble();
    duckAdapter.fly();
}

main();
