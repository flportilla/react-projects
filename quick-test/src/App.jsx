import { useState } from 'react';
import './App.css';
import Instructions from './Instructions';
import Timer from './Timer'

function App() {
  const [timerObj, setTimerObj] = useState()

  return (
    <div className="App">
      <Instructions timerObj={timerObj} />
      <Timer setTimerObj={setTimerObj} />
    </div>
  );
}

export default App;
