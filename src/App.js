import logo from "./logo.svg";
import "./App.css";
import { Blocks } from "./Components/Blocks/Blocks";
import { Keyboard } from "./Components/keyboard/keyboard";
import { useState, useEffect } from "react";

function App() {
  const [currentRow, setCurrentRow] = useState(1);
  const [currentWords, setCurrentWords] = useState([]);
  const [wordCount, setWordCount] = useState(0);
  const [guessWord, setGuessWord] = useState("HOUSE");
  const [lettersUsed, setLettersUsed] = useState([]);
  const [previousWord, setPreviousWord] = useState([]);

  let row = [1, 2, 3, 4, 5];

  // useEffect(() => {
  //   setGuessWord("HOUSE");
  // }, []);

  return (
    <div className="App">
      <h1 className="title">wordle</h1>
      <div className="wordle-blocks">
        {row.map((rows, i) => {
          return (
            <Blocks
              key={i}
              row={rows}
              currentRow={currentRow}
              currentWords={currentWords}
              wordCount={wordCount}
              guessWord={guessWord}
              setCurrentWords={setCurrentWords}
              previousWord={previousWord}
              setPreviousWord={setPreviousWord}
              lettersUsed={lettersUsed}
            />
          );
        })}
      </div>
      <div className="keyboard">
        <Keyboard
          setCurrentWords={setCurrentWords}
          currentWords={currentWords}
          setWordCount={setWordCount}
          wordCount={wordCount}
          setCurrentRow={setCurrentRow}
          currentRow={currentRow}
          setLettersUsed={setLettersUsed}
          lettersUsed={lettersUsed}
        />
      </div>
    </div>
  );
}

export default App;
