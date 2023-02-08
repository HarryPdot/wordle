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
  const [correct, setCorrect] = useState(false);
  const [remaining, setRemaining] = useState();
  const [game, setGame] = useState(1);

  let row = [1, 2, 3, 4, 5, 6];

  const randomized = () => {
    let randomize = Math.floor(Math.random() * data.length - 1);
    return randomize;
  };

  useEffect(() => {
    let randomizedWord = randomized();
    setGuessWord(data[randomizedWord].toUpperCase());
  }, []);

  const setNotEnough = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 500);
  };

  const setGameOver = () => {
    setCorrect(true);
  };

  const handlePlayAgain = () => {
    setCurrentRow(1);
    setCurrentWords([]);
    setWordCount(0);
    let randomizedWord = randomized();
    setGuessWord(data[randomizedWord].toUpperCase());
    setLettersUsed([]);
    setPreviousWord([]);
    setError(false);
    setCorrect(false);
    setGame(game + 1);
  };

  return (
    <div className="App">
      {correct ? (
        <div className="overlay">
          <div className="play-again-modal">
            <h1>
              {guessWord.toUpperCase() == currentWords.join("").toUpperCase()
                ? "You passed!"
                : "You failed"}
            </h1>
            <div>the word was {guessWord.toUpperCase()}</div>
            <button onClick={() => handlePlayAgain()}>play again?</button>
          </div>
        </div>
      ) : null}
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
              remaining={remaining}
              setRemaining={setRemaining}
              game={game}
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
          setGameOver={setGameOver}
          guessWord={guessWord}
          setRemaining={setRemaining}
          previousWord={previousWord}
          setPreviousWord={setPreviousWord}
          game={game}
        />
      </div>
    </div>
  );
}

export default App;
