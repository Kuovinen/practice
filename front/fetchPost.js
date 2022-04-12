async function handleClickTwo() {
  fetch("http://localhost:5000/", {
    method: "post",
    mode: "no-cors",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },

    //make sure to serialize your JSON body
    body: JSON.stringify({
      name: "love",
    }),
  });
}
