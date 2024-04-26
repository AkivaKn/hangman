import './App.css'
import { useState } from 'react';
import Header from './components/Header'
import Guess from "./components/Guess"
import Graphic from './components/Graphic';
import Alphabet from './components/Alphabet';


function App() {

const [incorrectCount, setIncorrectCount]=useState(1)

  return (
    <div>
      <Header />
      <Guess setIncorrectCount={setIncorrectCount} />
      <Graphic incorrectCount={incorrectCount} />
      <Alphabet />
    </div>
  );
}

export default App
