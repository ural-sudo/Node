
const user = getUser(1, (userObject) =>{
    console.log("Getirilen user: " + userObject.name);
});


function getUser  (id, callback) {
    console.log(id + " id li user getiriliyor...");
     setTimeout(() => {
        callback({id:id,name:"Erçin"});
    }, 2000);
    

}
