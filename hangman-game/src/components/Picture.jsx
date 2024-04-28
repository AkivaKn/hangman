function Picture({ remainingGuesses }) {
    return (
        <section id="picture">
            <p>Remaining Guesses: {remainingGuesses} </p>
            {remainingGuesses <7 ?<div id="rope"></div>:null}
            {remainingGuesses <6 ?< div id="head"></div>:null}
      <div id="upper-body">
        {remainingGuesses <5 ?<div id="left-arm"></div>:null}
             {remainingGuesses <4 ?<div id="spine"></div>:<div id="empty-spine"></div>}
              {remainingGuesses <3 ?<div id="right-arm"></div>:<div className='empty'></div>}
          </div>
          <div id="lower-body">
              {remainingGuesses <2 ?<div id="left-leg"></div>:<div className='empty'></div>}
              {remainingGuesses <1 ?<div id="right-leg"></div>:<div className='empty'></div>}
          </div>
    </section>
  );
}

export default Picture;
