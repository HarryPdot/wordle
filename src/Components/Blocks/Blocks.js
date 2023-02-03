import { useState, useEffect } from "react";
import { Block } from "./Block";

const Blocks = ({
  row,
  currentRow,
  currentWords,
  wordCount,
  guessWord,
  setCurrentWords,
  previousWord,
  setPreviousWord,
  lettersUsed,
}) => {
  const [inputWord, setInputWord] = useState(["", "", "", "", ""]);
  let column = [0, 1, 2, 3, 4];
  useEffect(() => {
    if (previousWord.length !== 5) return;
    // if (previousWord.join("") === guessWord) {
    //   console.log("yes");
    // } else if (previousWord.join("") !== guessWord) {
    //   console.log("no");
    // }
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
      {column.map((block, i) => {
        return (
          <Block
            key={i}
            column={block}
            inputWord={inputWord}
            previousWord={previousWord}
            currentRow={currentRow}
            guessWord={guessWord}
            lettersUsed={lettersUsed}
          />
        );
      })}
    </div>
  );
};

export { Blocks };
