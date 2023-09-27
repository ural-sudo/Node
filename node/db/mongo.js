const MongoClient = require("mongodb").MongoClient;

const dbURL = "mongodb://localhost:27017";

const client = MongoClient.connect(dbURL);
//------------Insert-----------------//

function ınsertUser() {
  client
    .then((result) => {
      //console.log(result);
      const db = result.db("test");
      //console.log(db);
      db.collection("user")
        .insertOne({
          name: "mongo1",
          version: "1.1.1.1",
        })
        .then((result) => {
          console.log(result);
        });
      console.log("Bağlantı Başarıyla gerçelşetirildi");
    })
    .catch((err) => {
      console.log("Hata çıktı");
      console.log(err);
    });
}
 //ınsertUser(); 
function findUser() {
  client.then((result) => {
    const db = result.db("test");

    db.collection("user")
      .find({ name: "mongo1" }, { limit: 3 })
      .toArray()
      .then((result) => {
        console.log(result);
      });
  });
}
//findUser();

const update = () => {
  client.then((result) => {
    const db = result.db("test");
    db.collection("user")
      .updateMany({ name: "mongo1" }, { $set: { name: "MONGO"} })
      .then((result) => {
        console.log(result);
      });
  });
};
//update();

const deleted = () => {
    client.then(result=>{
        const db = result.db('test');
        db.collection('user').deleteMany({name:"MONGO"}).then((result=>{
            console.log(result);
        }));
    });
};
//deleted();