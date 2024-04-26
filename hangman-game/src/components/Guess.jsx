import { useState } from "react"

function Guess({setIncorrectCount,character}) {
    const options = { hint: "Sport", answer: "rugby" }
    
    const [answer, setAnswer] = useState(options)
  if (character === 'k') {
    setIncorrectCount((currCount) => {
    return ++currCount
  })
}
    return (
      <section>
        <h2>Guess section</h2>
        <h2>Hint: {answer.hint}</h2>
        <p>Answer: {answer.answer}</p>
        <p>Character: {character}</p>
      </section>
    );
}

export default Guess


