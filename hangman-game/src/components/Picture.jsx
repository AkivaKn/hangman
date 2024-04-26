function Picture({incorrectCount}) {
    return (
        <section id='picture'>
            <h3>Picture Section</h3>
            <p>Incorrect Guesses: {incorrectCount}/7 </p>
        </section>
    )
}

export default Picture