//https://www.youtube.com/watch?v=wV-fDdHhGqs

// https://ably.com/blog/web-app-websockets-nodejs
// http://adilapapaya.com/docs/ws/
const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 5000 });
wss.on("connection", function (ws) {
  console.log("new client connected");
  //send a message back at client
  ws.send("Welcome, user.");

  ws.on("message", function (message) {
    console.log("received: %s", message);
  });
});
/*
//map to store clien metadata ( data asocietad with websocket client)
const clients = new Map();

//Subscribe to the WSS connection event using the wss.on function,
//providing a callback that will be called whenever a new WebSocket client
//connects to the server

wss.on("connection", (ws) => {
  const id = uuidv4();
  const color = Math.floor(Math.random() * 360);
  const metadata = { id, color };

  clients.set(ws, metadata);
});
ws.on("message", (messageAsString) => {
  const message = JSON.parse(messageAsString);
  const metadata = clients.get(ws);

  message.sender = metadata.id;
  message.color = metadata.color;
});
*/
