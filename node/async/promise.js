

const firstPromise = new Promise((resolve,reject) => {
        console.log("İşlem başladı");
        setTimeout(()=>{
            console.log("İşlem bitti");
            reject("hataaaaaa");
        },3000)
});

firstPromise.then( result => {

    console.log(result + "Buraya geldi");
}).catch( err => {
    console.log(err);
});

