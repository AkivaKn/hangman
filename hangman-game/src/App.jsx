import './App.css'
import { useState } from 'react';
import Header from './components/Header'
import Guess from "./components/Guess"
import Picture from './components/Picture';
import Alphabet from './components/Alphabet';
import Success from './components/Success';
import Fail from './components/Fail';


function App() {

  const [remainingGuesses, setRemainingGuesses] = useState(7)

  const options = { hint: "Sport", answer: "rugby" };
   
  const [answer, setAnswer] = useState(options);
 

  const [guess, setGuess] = useState('_____');

  const [status, setStatus] = useState("in-play")

  return (
    <div id='container'>
      <Header/>
      <Guess answer={answer} guess={guess}  />
      <Picture remainingGuesses={remainingGuesses} />
      <Alphabet 
        answer={answer} setRemainingGuesses={setRemainingGuesses} setGuess={setGuess} guess ={guess} setStatus={setStatus}
      />
      {status === 'in-play'? null:(status === 'success'?<Success />:<Fail />)}
    </div>
  );
}

export default App


