
const os = require('os');
const fs = require('fs');



fs.writeFile('info_pc.txt',
JSON.stringify({
    numberOfCPU:os.cpus().length,
    totalMem:os.totalmem()*1000,
    freeMem:os.freemem()*1000,
})
,function (){
    console.log("Complated");
});


/* const cpu = os.cpus();
const totalMem = os.totalmem();
const freeMem = os.freemem();

console.log(cpu.length);
console.log(totalMem);
console.log(freeMem);
 */

