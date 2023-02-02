import logo from "./logo.svg";
import "./App.css";
import { Blocks } from "./Components/Blocks/Blocks";
import { Keyboard } from "./Components/keyboard/keyboard";
import { useState, useEffect } from "react";

function App() {
  const [row1, setRow1] = useState("");
  return (
    <div className="App">
      <h1 className="title">wordle</h1>
      <div className="wordle-blocks">
        <Blocks row="1" />
        <Blocks row="2" />
        <Blocks row="3" />
        <Blocks row="4" />
        <Blocks row="5" />
      </div>
      <div className="keyboard">
        <Keyboard></Keyboard>
      </div>
    </div>
  );
}

export default App;
