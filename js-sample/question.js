

let randomNumber = Math.floor(Math.random()*100);
console.log("Random number " + randomNumber);
let randomNumberfirst = Math.flPoor(randomNumber/10);
console.log("Random First " + randomNumberfirst);
let randomNumberSecond = randomNumber%10;
console.log("Random Second " + randomNumberSecond);


 function  tahminEt(prediction){
    let predictionFirst = Math.floor(prediction / 10);
    let predictionSeconde = prediction % 10;
    if(randomNumber == prediction){
        console.log("10000 TL Kazandınız!");
    }else if(randomNumberfirst == predictionSeconde && 
            randomNumberSecond == predictionFirst
         ){
            console.log("5000 TL Kazandınız.!");
    }else if(
        randomNumberfirst == predictionFirst ||
        randomNumberfirst == predictionSeconde ||
        randomNumberSecond == predictionFirst||
        randomNumberSecond == predictionSeconde
    ){
        console.log("1000 tl kazandınız.");
    }else{
        console.log("Hiç bilemediniz.");
    }
}

tahminEt(45);
log