import "./App.css";
import { Blocks } from "./Components/Blocks/Blocks";
import { Keyboard } from "./Components/keyboard/keyboard";
import { useState, useEffect } from "react";
import { data } from "./Components/Data/Data";

function App() {
  const [currentRow, setCurrentRow] = useState(1);
  const [currentWords, setCurrentWords] = useState([]);
  const [wordCount, setWordCount] = useState(0);
  const [guessWord, setGuessWord] = useState("");
  const [lettersUsed, setLettersUsed] = useState([]);
  const [previousWord, setPreviousWord] = useState([]);
  const [error, setError] = useState(false);

  let row = [1, 2, 3, 4, 5];

  const setNotEnough = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 500);
  };

  useEffect(() => {
    let randomize = Math.floor(Math.random() * data.length - 1);
    setGuessWord(data[randomize].toUpperCase());
  }, []);

  return (
    <div className="App">
      <h1 className="title">wordle</h1>
      {error ? (
        <div className="error-message visible">not in word list</div>
      ) : (
        <div className="error-message hidden">not in word list</div>
      )}

      <div className={error ? "wordle-blocks nudging" : "wordle-blocks"}>
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
          setNotEnough={setNotEnough}
        />
      </div>
    </div>
  );
}

export default App;
