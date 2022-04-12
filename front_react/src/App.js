import "./App.css";

function App() {
  function handleClickThree() {
    console.log("3");
  }
  function handleClickTwo() {
    console.log("2");
  }
  function handleClick() {}
  return (
    <div className="App">
      <main>
        <ul id="list">
          <li id="one">ONE</li>
          <li id="two">TWO</li>
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
