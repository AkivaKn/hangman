function Picture({incorrectCount}) {
    return (
        <section>
            <h3>Picture Section</h3>
            <p>Incorrect Guesses: {incorrectCount}/6 </p>
        </section>
    )
}

//3. how does it know when you fail. 

export default Picture