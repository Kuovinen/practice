const http = require("http");
const fs = require("fs");
index = [0];
var server = http.createServer((req, res) => {
  if (req.method == "GET") {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Max-Age": 2592000, // 30 days
    };
    //read txt file and send it's content as responce
    fs.readFile("test.txt", "utf8", (err, data) => {
      if (err) throw err;
      res.writeHead(200, headers, { "Content-type": "text/plain" });

      res.end(data.toString());
    });
  }
  //if got a post request, edit content of test.txt
  else if (req.method == "POST") {
    console.log("GOT A POST REQUEST");

    fs.writeFile("test.txt", "Orc!!!Waaar!", "utf8", (err) => {
      if (err) {
        console.log(err);
        throw err;
      }
    });
  }
});

//start the server at port 5000
server.listen(5000, () => {
  console.log("Server running on port 5000");
});
