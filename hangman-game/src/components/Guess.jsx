

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

export default Guess


