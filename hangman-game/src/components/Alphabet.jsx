import { useState } from "react";

function Alphabet({ answer: { answer }, setIncorrectCount }) {

  function handleClick(e) {
    const letterSelected = e.target.innerText;
    if (!answer.includes(letterSelected)) {
      setIncorrectCount((currCount) => {
        return ++currCount;
      });
    }
  }

  return (
    <section>
      <p> Alphabet Section</p>
      <button onClick={handleClick}>b</button>
    </section>
  );
}

//1. add correct guess functionality. 

export default Alphabet;
