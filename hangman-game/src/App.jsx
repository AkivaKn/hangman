import './App.css'
import { useState } from 'react';
import Header from './components/Header'
import Guess from "./components/Guess"
import Picture from './components/Picture';
import Alphabet from './components/Alphabet';
import Success from './components/Success';
import Fail from './components/Fail';


function App() {

  const [incorrectCount, setIncorrectCount] = useState(0)

  const options = { hint: "Sport", answer: "rugby" };
   
  const [answer, setAnswer] = useState(options);
 

  const [guess, setGuess] = useState('_____');

  const [status, setStatus] = useState("in-play")

  return (
    <div id='container'>
      <Header/>
      <Guess answer={answer} guess={guess}  />
      <Picture incorrectCount={incorrectCount} />
      <Alphabet 
        answer={answer} setIncorrectCount={setIncorrectCount} setGuess={setGuess} guess ={guess} setStatus={setStatus}
      />
      {status === 'in-play'? null:(status === 'success'?<Success />:<Fail />)}
    </div>
  );
}

export default App


