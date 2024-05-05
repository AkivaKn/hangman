function Alphabet({
  answer,
  setRemainingGuesses,
  setGuess,
  isDisabled,
  setStatus,
  setIsDisabled,
}) {
  const topRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const middleRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const btmRow = ["z", "x", "c", "v", "b", "n", "m"];

  function handleClick(e) {
    e.preventDefault();
    e.target.disabled = true;

    const letterSelected = e.target.innerText;
    if (!answer.word.includes(letterSelected)) {
      setRemainingGuesses((currCount) => {
        currCount === 1 ? setStatus("fail") : null;
        return --currCount;
      });
    } else {
      setGuess((currentGuess) => {
        const matchIndexes = [];
        answer.word.split("").forEach((char, index) => {
          if (char === letterSelected) {
            matchIndexes.push(index);
          }
        });
        const newGuess = currentGuess
          .split("")
          .map((char, index) => {
            if (matchIndexes.includes(index)) {
              return letterSelected;
            } else {
              return char;
            }
          })
          .join("");
        newGuess === answer.word ? setStatus("success") : null;
        return newGuess;
      });
    }
  }

  return (
    <section id="alphabet">
      <div className="alphabet-row">
        {topRow.map((letter) => {
          return isDisabled ? (
            <button onClick={handleClick} key={letter} className="letter">
              {letter}
            </button>
          ) : (
            <button
              disabled={false}
              onClick={handleClick}
              key={letter}
              className="letter"
            >
              {letter}
            </button>
          );
        })}
      </div>
      <div className="alphabet-row">
        {middleRow.map((letter) => {
          return isDisabled ? (
            <button onClick={handleClick} key={letter} className="letter">
              {letter}
            </button>
          ) : (
            <button
              disabled={false}
              onClick={handleClick}
              key={letter}
              className="letter"
            >
              {letter}
            </button>
          );
        })}
      </div>
      <div className="alphabet-row">
        {btmRow.map((letter) => {
          return isDisabled ? (
            <button onClick={handleClick} key={letter} className="letter">
              {letter}
            </button>
          ) : (
            <button
              disabled={false}
              onClick={handleClick}
              key={letter}
              className="letter"
            >
              {letter}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default Alphabet;
