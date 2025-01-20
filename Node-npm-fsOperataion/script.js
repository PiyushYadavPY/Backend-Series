const fs = require("fs");
const http = require("http");

fs.writeFile("hey.txt", "hello kaise ho", function (err) {
  if (err) console.error(err);
  else console.log("done");
});

fs.appendFile("hey.txt", " mastt hu", function (err) {
  if (err) console.error(err);
  else console.log("done");
});

fs.rename("hey.txt", "hello.text", function (err) {
  if (err) console.error(err);
  else console.log("done");
});

fs.copyFile("hello.txt", "./copy/piyush.txt", function (err) {
  if (err) console.error(err.message);
  else console.log("done");
});

fs.unlink("hello.txt", function (err) {
  if (err) console.error(err.message);
  else console.log("removed");
});

fs.rm("./copy", { recursive: true }, function (err) {
  if (err) console.error(err);
  else console.log("removed");
});

fs.readFile("./copy/hello.txt", "utf-8", function (err, data) {
  if (err) {
    console.error(err);
    return err;
  }
  console.log(data);
});

const server = http.createServer(function (req, res) {
  res.end("hello world");
});

server.listen(3000);
