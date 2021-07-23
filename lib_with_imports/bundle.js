import 'core-js/stable'
class Test {
    constructor(){
        console.log("Test");
    }
}
const sleep = (msec)=>new Promise((resolve)=>setTimeout(resolve, msec)
    )
;
const main = async ()=>{
    console.log("sleep 1sec");
    await sleep(1000);
    console.log([
        1,
        2,
        3
    ].map((n)=>n + 1
    ).join(","));
    new Test();
    const a = [
        "a",
        "b",
        "c"
    ];
    for (const n of a){
        console.log(n);
    }
    const b = {
        a: 123,
        b: 456
    };
    for(const n1 in b){
        console.log(n1, b[n1]);
    }
    console.log("abc".startsWith("ab"));
};
main();
const set = new Set();
set.add("a");
console.log(set);
