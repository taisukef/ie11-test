import { Test } from "./test.js";
import { sleep } from "https://js.sabae.cc/sleep.js";

const main = async () => {
  console.log("sleep 1sec");
  await sleep(1000);
  console.log([1, 2, 3].map(n => n + 1).join(","));
  new Test();
  const a = ["a", "b", "c"];
  for (const n of a) {
    console.log(n);
  }
  const b = { a: 123, b: 456 };
  for (const n in b) {
    console.log(n, b[n]);
  }
  console.log("abc".startsWith("ab"));
};
main();
const set = new Set();
set.add("a");
console.log(set);
