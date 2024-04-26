function Picture({incorrectCount}) {
    return (
        <section>
            <h3>Picture Section</h3>
            <p>Incorrect Guesses: {incorrectCount}/6 </p>
        </section>
    )
}

export default Picture