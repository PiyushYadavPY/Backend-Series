const express = require("express");
const app = express();
const userModel = require("./usermodel");
const usermodel = require("./usermodel");
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/create", async (req, res) => {
  let createduser = await usermodel.create({
    name: "Piyushee",
    email: "piyushee@gmail.com",
    username: "piyushee",
  });
  res.send(createduser);
});

app.get("/read", async (req, res) => {
  let users = await usermodel.find();
  res.send(users);
});

app.get("/update", async (req, res) => {
  let updateduser = await userModel.findOneAndUpdate(
    { username: "piyush" },
    { name: "piyush uma yadav" },
    { new: true }
  );
  res.send(updateduser);
});

app.get("/delete", async (req, res) => {
  let users = await usermodel.findOneAndDelete({ username: "piyushee" });
  res.send(users);
});

app.listen(3000);
