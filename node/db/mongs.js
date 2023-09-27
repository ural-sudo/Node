const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/trying")
  .then(() => {
    console.log("Connection successfull");

  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    isPrivate:Boolean,
});
const User = mongoose.model('user',userSchema);

const user1 = User({name:"Erçin",age:"26",isPrivate:false});

user1.save().then(result =>{
    console.log(result);
});