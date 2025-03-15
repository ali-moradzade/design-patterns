import {DuckSimulator} from "./DuckSimulator";
import {CountingDuckFactory} from "./CountingDuckFactory";

const simulator = new DuckSimulator();
const duckFactory = new CountingDuckFactory();

simulator.simulate(duckFactory);
