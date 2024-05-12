import hangmanSix from "../assets/hangman-0.svg";
import hangmanFive from "../assets/hangman-1.svg";
import hangmanFour from "../assets/hangman-2.svg";
import hangmanThree from "../assets/hangman-3.svg";
import hangmanTwo from "../assets/hangman-4.svg";
import hangmanOne from "../assets/hangman-5.svg";
import hangmanZero from "../assets/hangman-6.svg";

function Picture({ remainingGuesses }) {
  return (
    <section id="picture">
      <p>Remaining Guesses: {remainingGuesses} </p>
      {remainingGuesses === 6 ? (
        <img src={hangmanSix} alt="gallows" id="gallows" />
      ) : remainingGuesses === 5 ? (
        <img src={hangmanFive} alt="gallows" id="gallows" />
      ) : remainingGuesses === 4 ? (
        <img src={hangmanFour} alt="gallows" id="gallows" />
      ) : remainingGuesses === 3 ? (
        <img src={hangmanThree} alt="gallows" id="gallows" />
      ) : remainingGuesses === 2 ? (
        <img src={hangmanTwo} alt="gallows" id="gallows" />
      ) : remainingGuesses === 1 ? (
        <img src={hangmanOne} alt="gallows" id="gallows" />
      ) : remainingGuesses === 0 ? (
        <img src={hangmanZero} alt="gallows" id="gallows" />
      ) : null}
    </section>
  );
}

export default Picture;
