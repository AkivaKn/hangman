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


  return (
    <div>
      <Header />
      <Guess answer={answer}  />
      <Picture incorrectCount={incorrectCount} />
      <Alphabet
        answer={answer} setIncorrectCount={setIncorrectCount}
      />
    </div>
  );
}
//need to make a correct answer state. 
export default App
