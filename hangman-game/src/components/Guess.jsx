import { useState } from "react"

function Guess({setIncorrectCount}) {
    const options = { hint: "Sport", answer: "rugby" }
    
    const [answer, setAnswer] = useState(options)

    return (
      <section>
        <h2>Hint: {answer.hint}</h2>
        <p>Answer: {answer.answer}</p>
      </section>
    );
}

export default Guess

//guess - make a button which actions set Count
