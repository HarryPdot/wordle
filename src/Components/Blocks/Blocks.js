import { useState, useEffect } from "react";

const Blocks = ({ row, currentRow, currentWords, wordCount }) => {
  const [inputWord, setInputWord] = useState(["", "", "", "", ""]);

  useEffect(() => {
    if (row !== currentRow) return;
    console.log("this is row ", row);
    let test = inputWord.map((letter, i) => {
      if (currentWords[i] == undefined) return "";
      return currentWords[i];
    });
    setInputWord(test);
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
