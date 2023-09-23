const promise = require("./sample-promise");

async function getComments() {
  try {
    const user = await promise.getUser(1);
    console.log(user);
    const courses = await promise.getCourse(["türkçe", "ingilizce"]);
    console.log(courses);
    console.log("işlem bitti");
    
  } catch (error) {
    console.log(error);
  }
}

getComments();
