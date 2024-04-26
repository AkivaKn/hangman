
function Alphabet({ answer: { answer }, setIncorrectCount ,setGuess, guess, setStatus}) {
  const letters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
  function handleClick(e) {
    const letterSelected = e.target.innerText;
    if (!answer.includes(letterSelected)) {
        setIncorrectCount((currCount) => {
            currCount===6? setStatus("fail"):null
            //if count is 7 then send failure message.
        return ++currCount;
      });
    } else {
      setGuess((currentGuess) => {
        const matchIndexes = [];
        answer.split('').forEach((char, index) => {
         if (char === letterSelected) {
            matchIndexes.push(index)
          }
       })
        const newGuess = currentGuess.split('').map((char, index) => {
          if (matchIndexes.includes(index)) {
            return letterSelected
          } else {
            return char
          }
        }).join('')
          newGuess === answer ? setStatus("success") : null;
        return newGuess
      })
    }
        e.target.disabled=true
  }
    
    

  return (
    <section>
      <p> Alphabet Section</p>
      {letters.map((letter) => {
        return <button onClick={handleClick} key={letter}>{letter}</button>
        
      })}
    </section>
  );
}


export default Alphabet;
