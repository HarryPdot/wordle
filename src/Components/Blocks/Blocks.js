import { useState, useEffect } from "react";

const Blocks = ({
  row,
  currentRow,
  currentWords,
  wordCount,
  guessWord,
  setCurrentWords,
  previousWord,
  setPreviousWord,
}) => {
  const [inputWord, setInputWord] = useState(["", "", "", "", ""]);

  useEffect(() => {
    if (previousWord.length !== 5) return;
    if (previousWord.join("") === guessWord) {
      console.log("yes");
    } else if (previousWord.join("") !== guessWord) {
      console.log("no");
    }
  }, [currentRow]);

  useEffect(() => {
    if (row !== currentRow) return;
    console.log("this is row ", row);
    let word = inputWord.map((letter, i) => {
      if (currentWords[i] == undefined) return "";
      return currentWords[i];
    });
    setInputWord(word);
    setPreviousWord(currentWords);
  }, [wordCount, currentRow]);

  return (
    <div className="word-blocks">
      <div className="block">{inputWord[0]}</div>
      <div className="block">{inputWord[1]}</div>
      <div className="block">{inputWord[2]}</div>
      <div className="block">{inputWord[3]}</div>
      <div className="block">{inputWord[4]}</div>
    </div>
  );
};

export { Blocks };
