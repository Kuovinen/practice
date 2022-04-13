//return server responce as a String
async function returnSVal() {
  const val = await fetch("http://localhost:5000/").then((response) => {
    return response.text();
  });
  return val;
}
//create and add a new list element to existing list with server val content
async function handleClick() {
  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.innerHTML = await returnSVal();
  li.style.color = "orange";
  list.appendChild(li);
}
