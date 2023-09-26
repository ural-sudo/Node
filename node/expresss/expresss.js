const express = require("express");

const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "Erçin", age: 26 },
  { id: 2, name: "Saime", age: 27 },
  { id: 3, name: "Kaan", age: 31 },
];

/* --------------POST-------------- */

app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age,
  };
  users.push(newUser);
  res.json(newUser);
});

/* --------------GET--------------- */
app.get("/", (req, res) => {
  res.send("<h1> HomePage</h1>");
});

//Normal request with express
app.get("/users", function (req, res) {
  //console.log(req.body);
  res.json([users]);
});

app.get("/users", (req, res) => {
  if (req.query.reverse) {
    res.send(users.reverse());
  } else {
    res.json(users);
  }
});

//Request with param
app.get("/user/:id", (req, res) => {
  res.json({ name: "Erçin" });
  console.log(req.params);
});

/* --------------PUT-------------- */
app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return res.send("Kullanıcı Bulunamadı");
  }
  user.name = req.body.name;
  user.age = req.body.age;
  res.json(user);
});
/* -------------------DELETE-------------- */


app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const user = users.find((user) => {
    return user.id === parseInt(id);
  });
  console.log(user);

  if (!user) {
    return res.status(404).send("Kullanıcı Bulunamadı");
  }
  const index = users.indexOf(user); 
  console.log(index);
  users.splice(index,1);
  res.json(user);
});

app.listen(3000, (_) => {
  console.log("Listen");
});
