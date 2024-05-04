import { useState } from "react";

function Guess({ answer, guess }) {
  const [showHint, setShowHint] = useState(false)
  
  const handleClick = () => {
  setShowHint(!showHint)
}

    return (
      <section id='guess'>
        <h2>Category: {answer.category}</h2>
        <button onClick={handleClick}>{showHint? 'Hide Hint':'Show Hint'}</button>
        {showHint ? <h3>Hint: {answer.hint}</h3> : <h3></h3>}
        <p className="spaced-letters">Guess: {guess} </p>
      </section>
    );
}

export default Guess


