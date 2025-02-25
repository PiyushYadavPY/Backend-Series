const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  console.log("run middleware");
  next();
});

app.use(function (req, res, next) {
  console.log("run middleware again");
  next();
});

app.get("/", function (req, res) {
  res.send("Hello Piyush");
});

app.get("/about", function (req, res) {
  res.send("about piyush");
});

app.get("/profile", function (req, res, next) {
  res.send("profile piyush");
  //   return next(new Error("Something went wrong"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.listen(3000);
