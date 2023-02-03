import { clsx } from "clsx";
import { useEffect, useState } from "react";

const Block = ({
  column,
  inputWord,
  previousWord,
  currentRow,
  guessWord,
  lettersUsed,
}) => {
  const [colorLetter, setColorLetter] = useState("yes");

  let something = "yes";

  useEffect(() => {
    if (previousWord === []) return;
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
