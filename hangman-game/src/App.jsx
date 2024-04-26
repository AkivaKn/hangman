import './App.css'
import { useState } from 'react';
import Header from './components/Header'
import Guess from "./components/Guess"
import Picture from './components/Picture';
import Alphabet from './components/Alphabet';


function App() {

  const [incorrectCount, setIncorrectCount] = useState(1)
  const [character,setCharacter] = useState('h')

  return (
    <div>
      <Header />
      <Guess setIncorrectCount={setIncorrectCount} character={character} />
      <Picture incorrectCount={incorrectCount}  />
      <Alphabet setCharacter={setCharacter} />
    </div>
  );
}

export default App
