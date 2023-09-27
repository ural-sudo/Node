const mongoose = require("mongoose");

const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/test");
const userSchema = new Schema({},{collection:'user'});
const User = mongoose.model("user",userSchema);
User.find().then((users) => {
  console.log(users);
});
