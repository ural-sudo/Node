

exports.getUser = id =>{
    console.log("User getiriliyor...");
     return new Promise((res,rej) => {
        setTimeout(() => {
            res(id  + " id li Kullanıjı getirildi..");
            rej("Kullanıcı getirilemedi");
        }, 2000);
    });
}

exports.getCourse = courses => {
    return new Promise((res,rej)=> {
        console.log("Courses are came");
        setTimeout(() => {
            res(courses);
            rej("Courses are not came");
        }, 2000);
    });
};

/* getUser(1).then(result => {
    console.log(result);
   getCourse(["türkçe","ingilizce"]).then(result=>{
    console.log(result);
   });
}); */