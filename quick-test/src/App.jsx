import { useState } from 'react';
import './App.css';
import Instructions from './Instructions';
import Game from './Game'

function App() {
  const [gameObj, setgameObj] = useState()

  return (
    <div className="App">
      <Instructions gameObj={gameObj} />
      <Game setgameObj={setgameObj} />
    </div>
  );
}

export default App;
