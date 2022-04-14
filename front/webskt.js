//https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications

const webSocket = new WebSocket("ws://127.0.0.1:5000");

function handleClickFour() {
  webSocket.send("HATE");
}
// when messages are received, a message event is sent to the WebSocket object
webSocket.onmessage = function (event) {
  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.innerHTML = event.data;
  li.style.color = "orange";
  list.appendChild(li);
};

//WebSocket.bufferedAmount returns 0 if no more data is currently being transmitted

//to close the connection
//exampleSocket.close();
