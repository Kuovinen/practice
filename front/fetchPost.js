//function to make a fetch post request to server with
//LOVE as the payload.
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
//same as about with just the payload switched to a different string.
async function handleClickThree() {
  fetch("http://localhost:5000/", {
    method: "post",
    mode: "no-cors",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },

    //make sure to serialize your JSON body
    body: JSON.stringify({
      name: "peace",
    }),
  });
}
