const express = require("express");
const app = express();
const path = require("path");
//parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/profile/:name", function (req, res) {
  res.send(`welcome ${req.params.name}`);
});
app.get("/about/:name/:age", function (req, res) {
  res.send(`Welcome ${req.params.name} of age ${req.params.age} `);
});

app.get("/profile/:name/:gender", function (req, res) {
  res.send(`Welcome ${req.params.name} of gender ${req.params.gender}`);
});

app.listen(3000, function () {
  console.log("its running");
});

// console.log(__dirname + "/public");
// console.log(__dirname, "public");
