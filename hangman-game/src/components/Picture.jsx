function Picture({ remainingGuesses }) {
  return (
    <section id="picture">
      <p>Remaining Guesses: {remainingGuesses} </p>
      {remainingGuesses === 6 ? (
        <img src="../../images/hangman-0.svg" alt="gallows" id="gallows" />
      ) : remainingGuesses === 5 ? (
        <img src="../../images/hangman-1.svg" alt="gallows" id="gallows" />
      ) :remainingGuesses === 4 ? (
        <img src="../../images/hangman-2.svg" alt="gallows" id="gallows" />
      ) : remainingGuesses === 3 ? (
        <img src="../../images/hangman-3.svg" alt="gallows" id="gallows" />
      ) :remainingGuesses === 2 ? (
        <img src="../../images/hangman-4.svg" alt="gallows" id="gallows" />
      ) :remainingGuesses === 1 ? (
        <img src="../../images/hangman-5.svg" alt="gallows" id="gallows" />
      ) : remainingGuesses === 0 ? (
        <img src="../../images/hangman-6.svg" alt="gallows" id="gallows" />
      ) : null}
     
      {/* {remainingGuesses < 6 ? <div id="head"></div> : null} */}
      {/* <div id="upper-body">
        {remainingGuesses < 5 ? <div id="left-arm"></div> : null}
        {remainingGuesses < 4 ? (
          <div id="spine"></div>
        ) : (
          <div id="empty-spine"></div>
        )}
        {remainingGuesses < 3 ? (
          <div id="right-arm"></div>
        ) : (
          <div className="empty"></div>
        )}
      </div>
      <div id="lower-body">
        {remainingGuesses < 2 ? (
          <div id="left-leg"></div>
        ) : (
          <div className="empty"></div>
        )}
        {remainingGuesses < 1 ? (
          <div id="right-leg"></div>
        ) : (
          <div className="empty"></div>
        )}
      </div> */}
    </section>
  );
}

export default Picture;
