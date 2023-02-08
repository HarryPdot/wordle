import { clsx } from "clsx";
import "../../App.css";
import { useState, useEffect } from "react";

const Keys = (props) => {
  const {
    children,
    id,
    className,
    onClick,
    guessWord,
    lettersUsed,
    letterRow,
    previousWord,
    game,
  } = props;
  const [color, setColor] = useState("");
  useEffect(() => {
    if (props.currentRow === 1) return;
    if (previousWord === []) return;
    if (color === "green") return;
    if (guessWord.split("").includes(children) === false) return;
    if (previousWord[guessWord.split("").indexOf(children)] === children) {
      setColor("green");
    } else if (previousWord.includes(children)) {
      setColor("yellow");
    } else {
      setColor("");
    }
  }, [props.currentRow]);

  useEffect(() => {
    if (game === 1) return;
    console.log("resetting");
    setColor("");
  }, [game]);

  return (
    <div onClick={onClick} id={id} className={clsx(color, className)}>
      {children}
    </div>
  );
};

export { Keys };
