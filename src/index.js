// class Monitor {
//   constructor(config) {
//     this.config = config;
//   }
//   run() {
//     console.log(666);
//   }
// }

// export default Monitor;

import { injectXHR } from "./lib/xhr";
import { pv } from "./lib/pv";

injectXHR();
pv();

console.log(6667)
