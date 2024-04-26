

function Guess({ answer, guess }) {
  

  
    return (
      <section>
        <h2>Guess section</h2>
        <h2>Hint: {answer.hint}</h2>
        <p className="spaced-letters">Guess: {guess} </p>
        <p>Answer: {answer.answer}</p>
      </section>
    );
}

//2. how does it show the current state of the guess

export default Guess


