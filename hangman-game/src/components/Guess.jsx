

function Guess({ answer, guess }) {
    return (
      <section id='guess'>
        <h2>Guess section</h2>
        <h2>Hint: {answer.hint}</h2>
        <p className="spaced-letters">Guess: {guess} </p>
      </section>
    );
}

export default Guess


