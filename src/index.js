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
import { injectJsError } from "./lib/jsError";

injectJsError();
injectXHR();
pv();
