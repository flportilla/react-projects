import './App.css';
import { useEffect, useState, useRef } from 'react';
import StartScreen from './components/StartScreen';
import Score from './components/Score';
import Game from './components/Game'

const STATUS = {
  IDLE: 'IDLE',
  GAMING: "GAMING"
}

function App() {
  const [status, setStatus] = useState(STATUS.IDLE)

  const [score, setScore] = useState(1)

  return (
    <div className="App">

      {status === STATUS.IDLE && <StartScreen onStart={() => setStatus(STATUS.GAMING)} />}

      {status === STATUS.GAMING && <Game score={score} setScore={setScore} />}

      <Score score={score} />
    </div>
  );
}

export default App;


// 1. canvas: start 
// 2: game

// 
// 



