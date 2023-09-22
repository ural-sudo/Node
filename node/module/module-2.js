

let sayWhichModule = _ => {
    console.log("This is module TWO..");
}
let authorName = "Ahmet Erçin Ural";



//Option one
module.exports.function= sayWhichModule;
//Option two
exports.name = authorName;
//Option three
exports.dogVoice = _ => {
    console.log("Havvv Havvv");
}