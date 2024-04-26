function Alphabet({ setCharacter }) {
    
    return(
    <section>
            <p> Alphabet Section</p>
            <button onClick={(e) => {
                setCharacter(() => { return e.target.textContent })
            }}>k</button>
            
        </section>);
}

export default Alphabet