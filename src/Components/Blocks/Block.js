import { clsx } from "clsx";
import { useEffect, useState } from "react";

const Block = ({
  column,
  inputWord,
  previousWord,
  currentRow,
  guessWord,
  remaining,
  setRemaining,
  game,
}) => {
  const [colorLetter, setColorLetter] = useState("yes");

  useEffect(() => {
    if (previousWord === []) return;
    if (guessWord[column] === inputWord[column]) {
      setColorLetter("green");
      setRemaining();
    } else if (guessWord.split("").includes(inputWord[column]) === true) {
      setColorLetter("yellow");
    } else {
      setColorLetter("");
    }
  }, [currentRow]);

  useEffect(() => {
    if (game === 1) return;
    console.log("resetting");
    setColorLetter("");
  }, [game]);

  return <div className={clsx("block", colorLetter)}>{inputWord[column]}</div>;
};

export { Block };
