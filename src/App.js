import logo from "./logo.svg";
import "./App.css";
import { Blocks } from "./Components/Blocks/Blocks";
import { Keyboard } from "./Components/keyboard/keyboard";
import { useState, useEffect } from "react";

function App() {
  const [currentRow, setCurrentRow] = useState(1);
  const [currentWords, setCurrentWords] = useState([]);
  const [wordCount, setWordCount] = useState(0);
  const [rowWord, setRowWord] = useState("");

  return (
    <div className="App">
      <h1 className="title">wordle</h1>
      <div className="wordle-blocks">
        <Blocks
          row={1}
          currentRow={currentRow}
          currentWords={currentWords}
          wordCount={wordCount}
        />
        <Blocks
          row={2}
          currentRow={currentRow}
          currentWords={currentWords}
          wordCount={wordCount}
        />
        <Blocks
          row={3}
          currentRow={currentRow}
          currentWords={currentWords}
          wordCount={wordCount}
        />
        <Blocks
          row={4}
          currentRow={currentRow}
          currentWords={currentWords}
          wordCount={wordCount}
        />
        <Blocks
          row={5}
          currentRow={currentRow}
          currentWords={currentWords}
          wordCount={wordCount}
        />
      </div>
      <div className="keyboard">
        <Keyboard
          setCurrentWords={setCurrentWords}
          currentWords={currentWords}
          setWordCount={setWordCount}
          wordCount={wordCount}
          setCurrentRow={setCurrentRow}
          currentRow={currentRow}
        />
      </div>
    </div>
  );
}

export default App;
