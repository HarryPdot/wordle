import { clsx } from "clsx";
import { useEffect, useState } from "react";

const Block = ({ column, inputWord, previousWord, currentRow, guessWord }) => {
  const [colorLetter, setColorLetter] = useState("yes");

  useEffect(() => {
    if (previousWord === []) return;
    console.log(guessWord);
    if (guessWord[column] === inputWord[column]) {
      setColorLetter("green");
    } else if (guessWord.split("").includes(inputWord[column]) === true) {
      setColorLetter("yellow");
    } else {
      setColorLetter("");
    }
  }, [currentRow]);

  return <div className={clsx("block", colorLetter)}>{inputWord[column]}</div>;
};

export { Block };
