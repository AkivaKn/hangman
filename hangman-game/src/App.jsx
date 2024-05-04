import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Guess from "./components/Guess";
import Picture from "./components/Picture";
import Alphabet from "./components/Alphabet";
import Success from "./components/Success";
import Fail from "./components/Fail";
import NewGame from "./components/NewGame";
import axios from "axios";

function App() {
  const [remainingGuesses, setRemainingGuesses] = useState(6);
  const [answer, setAnswer] = useState({});
  const [guess, setGuess] = useState("_____");
  const [status, setStatus] = useState("in-play");
  const [newGame, setNewGame] = useState(false);
  const [isDisabled,setIsDisabled] = useState(false)

  useEffect(() => {
    axios
      .get("https://www.wordgamedb.com/api/v1/words", {
        params: {
          numLetters: 5,
        },
      })
      .then((data) => {
        setAnswer(data.data[Math.ceil(Math.random() * 25)]);
      });
  }, [newGame]);

  const handleClick = () =>{
    setNewGame(!newGame)
    setGuess("_____")
    setRemainingGuesses(6)
    setStatus('in-play')
    setIsDisabled(false)
setTimeout(() => {
  setIsDisabled(true);
  
}, 100);
}

  return (
    <div id="container">
      <Header />
      <Guess answer={answer} guess={guess} />
      <Picture remainingGuesses={remainingGuesses} />
      <Alphabet
        answer={answer}
        setRemainingGuesses={setRemainingGuesses}
        setGuess={setGuess}
        guess={guess}
        setStatus={setStatus}
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
      />
      
      <button onClick={handleClick}>New Game</button>

      {status === "in-play" ? null : status === "success" ? (
        <Success />
      ) : (
        <Fail />
      )}
    </div>
  );
}

export default App;
