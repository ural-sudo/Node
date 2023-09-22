let arabaDizisi = [
  {tekerlek: 4,kapi: 5,motor: 2,},{tekerlek: 4,kapi: 5,motor: 1.6,},
  "citroen",
]; 
let callBackFastArrow = (deger,index)=>{
    return deger;
}

let mapFuncion = arabaDizisi.map(callBackFastArrow);


console.log(mapFuncion);

