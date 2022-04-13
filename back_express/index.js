const express = require("express");
const fs = require("fs");
var app = express();

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//instanceOfExpress.method(path,handlerFunction)
app.get("/", (req, res) => {
  //read txt file and send it's content as responce
  fs.readFile("test.txt", "utf8", (err, data) => {
    if (err) throw err;
    res.send("Recieved GET, " + data.toString());
    console.log("Got a get request  and sent: " + data.toString());
  });
});
//if got a post request, edit content of test.txt
app.post("/", (req, res) => {
  let payload = "";
  req.on("data", (chunk) => {
    payload += chunk;
  });
  req.on("end", () => {
    let data = JSON.parse(payload);
    fs.writeFile("test.txt", data.name, "utf8", (err) => {
      if (err) {
        console.log(err);
        throw err;
      }
    });
    res.end();
  });
});
var server = app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
