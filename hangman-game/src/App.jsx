import './App.css'
import { useState } from 'react';
import Header from './components/Header'
import Guess from "./components/Guess"
import Picture from './components/Picture';
import Alphabet from './components/Alphabet';


function App() {

  const [incorrectCount, setIncorrectCount] = useState(1)

  const options = { hint: "Sport", answer: "defgh" };
   
  const [answer, setAnswer] = useState(options);
 

  const [guess, setGuess] = useState('_____');

  const [status, setStatus] = useState("in-play")

  return (
    <div>
      <Header />
      <Guess answer={answer} guess={guess}  />
      <Picture incorrectCount={incorrectCount} />
      <Alphabet
        answer={answer} setIncorrectCount={setIncorrectCount} setGuess={setGuess} guess ={guess} setStatus={setStatus}
      />
    </div>
  );
}

export default App


 //functionality needed to create a random word and then set guess to be the correct length of blanks. 