import "../../App.css";
import { data } from "../Data/Data";
import { Keys } from "../Keys/Keys";

const Keyboard = ({
  currentWords,
  setCurrentWords,
  wordCount,
  setWordCount,
  setCurrentRow,
  currentRow,
  setLettersUsed,
  lettersUsed,
  setNotEnough,
  setGameOver,
  guessWord,
  setRemaining,
  previousWord,
  setPreviousWord,
}) => {
  const addLetter = (event) => {
    // let value = e.target.value;
    if (currentWords.length > 4) return;
    setCurrentWords([...currentWords, event.target.textContent]);
    if (wordCount === 5) return;
    setWordCount(wordCount + 1);
  };

  const deleteWord = () => {
    let newWord = currentWords;
    newWord.pop();
    setCurrentWords(newWord);
    if (wordCount === 0) return;
    setWordCount(wordCount - 1);
  };

  const enterWord = () => {
    if (wordCount !== 5) return;
    if (data.includes(currentWords.join("").toLowerCase()) === false) {
      setNotEnough();
      return;
    }
    if (guessWord === currentWords.join("")) {
      setGameOver();
      return;
    }
    let saveLetters = lettersUsed;
    for (let i = 0; i < currentWords.length; i++) {
      saveLetters.push(currentWords[i]);
    }
    setRemaining(guessWord);
    setLettersUsed(saveLetters);
    setCurrentRow(currentRow + 1);
    setWordCount(0);
    setPreviousWord(currentWords);
    resetWords();
  };

  const resetWords = () => {
    setCurrentWords([]);
  };

  let letterRow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  let letterRow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  let letterRow3 = ["Z", "X", "C", "V", "B", "N", "M"];
  return (
    <>
      <div className="keyboard-row-1">
        {letterRow1.map((letters, i) => {
          return (
            <Keys
              key={i}
              className={lettersUsed.includes(letters) ? "key greyOut" : "key"}
              onClick={(e) => addLetter(e)}
              letterRow={letterRow1}
              currentRow={currentRow}
              lettersUsed={lettersUsed}
              guessWord={guessWord}
              previousWord={previousWord}
            >
              {letters}
            </Keys>
          );
        })}
      </div>
      <div className="keyboard-row-2">
        {letterRow2.map((letters, i) => {
          return (
            <Keys
              key={i}
              className={lettersUsed.includes(letters) ? "key greyOut" : "key"}
              onClick={(e) => addLetter(e)}
              letterRow={letterRow2}
              currentRow={currentRow}
              lettersUsed={lettersUsed}
              guessWord={guessWord}
              previousWord={previousWord}
            >
              {letters}
            </Keys>
          );
        })}
      </div>
      <div className="keyboard-row-3">
        <div className="key key-enter" onClick={() => enterWord()}>
          ENTER
        </div>
        {letterRow3.map((letters, i) => {
          return (
            <Keys
              key={i}
              className={lettersUsed.includes(letters) ? "key greyOut" : "key"}
              onClick={(e) => addLetter(e)}
              letterRow={letterRow3}
              currentRow={currentRow}
              lettersUsed={lettersUsed}
              guessWord={guessWord}
              previousWord={previousWord}
            >
              {letters}
            </Keys>
          );
        })}
        <div className="key key-delete" onClick={() => deleteWord()}>
          DELETE
        </div>
      </div>
    </>
  );
};

export { Keyboard };
