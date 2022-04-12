import "./App.css";
import React from "react";
function App() {
  const [state, dispatch] = React.useReducer(reducer, []);
  function reducer(state, action) {
    console.log("got action type: " + action.type);
    if (action.type == "ACTIONLOVE") {
      return [...state, "love"];
    } else if (action.type == "ACTIONPEACE") {
      return [...state, "peace"];
    } else if (action.type == "ACTIONGET") {
      return [...state, "ADD"];
    }
    throw new Error("no matching action type!");
  }

  function handleClickThree() {
    dispatch({ type: "ACTIONPEACE" });
  }
  function handleClickTwo() {
    dispatch({ type: "ACTIONLOVE" });
  }
  function handleClick() {
    dispatch({ type: "ACTIONGET" });
  }

  return (
    <div className="App">
      <main>
        <ul id="list">
          <li id="one">ONE</li>
          <li id="two">TWO</li>
          {state.map((element, index) => (
            <li key={index} style={{ color: "yellow" }}>
              {element}
            </li>
          ))}
        </ul>
      </main>
      <div>
        {" "}
        <button onClick={handleClick}>ADD</button>
        <button onClick={handleClickTwo}>SEND LOVE</button>
        <button onClick={handleClickThree}>SEND PEACE</button>
      </div>
    </div>
  );
}

export default App;
