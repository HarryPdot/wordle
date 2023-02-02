const Keyboard = ({
  currentWords,
  setCurrentWords,
  wordCount,
  setWordCount,
  setCurrentRow,
  currentRow,
}) => {
  const test = (event) => {
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
    console.log(currentWords.join(""));
    setCurrentRow(currentRow + 1);
    setCurrentWords([]);
    setWordCount(0);
  };

  return (
    <>
      <div className="keyboard-row-1">
        <div className="key" onClick={(e) => test(e)}>
          Q
        </div>
        <div className="key" onClick={(e) => test(e)}>
          W
        </div>
        <div className="key" onClick={(e) => test(e)}>
          E
        </div>
        <div className="key" onClick={(e) => test(e)}>
          R
        </div>
        <div className="key" onClick={(e) => test(e)}>
          T
        </div>
        <div className="key" onClick={(e) => test(e)}>
          Y
        </div>
        <div className="key" onClick={(e) => test(e)}>
          U
        </div>
        <div className="key" onClick={(e) => test(e)}>
          I
        </div>
        <div className="key" onClick={(e) => test(e)}>
          O
        </div>
        <div className="key" onClick={(e) => test(e)}>
          P
        </div>
      </div>
      <div className="keyboard-row-2">
        <div className="key" onClick={(e) => test(e)}>
          A
        </div>
        <div className="key" onClick={(e) => test(e)}>
          S
        </div>
        <div className="key" onClick={(e) => test(e)}>
          D
        </div>
        <div className="key" onClick={(e) => test(e)}>
          F
        </div>
        <div className="key" onClick={(e) => test(e)}>
          G
        </div>
        <div className="key" onClick={(e) => test(e)}>
          H
        </div>
        <div className="key" onClick={(e) => test(e)}>
          J
        </div>
        <div className="key" onClick={(e) => test(e)}>
          K
        </div>
        <div className="key" onClick={(e) => test(e)}>
          L
        </div>
      </div>
      <div className="keyboard-row-3">
        <div className="key key-enter" onClick={() => enterWord()}>
          ENTER
        </div>
        <div className="key" onClick={(e) => test(e)}>
          Z
        </div>
        <div className="key" onClick={(e) => test(e)}>
          X
        </div>
        <div className="key" onClick={(e) => test(e)}>
          C
        </div>
        <div className="key" onClick={(e) => test(e)}>
          V
        </div>
        <div className="key" onClick={(e) => test(e)}>
          B
        </div>
        <div className="key" onClick={(e) => test(e)}>
          N
        </div>
        <div className="key" onClick={(e) => test(e)}>
          M
        </div>
        <div className="key key-delete" onClick={() => deleteWord()}>
          DELETE
        </div>
      </div>
    </>
  );
};

export { Keyboard };
