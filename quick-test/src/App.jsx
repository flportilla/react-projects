import { useState } from 'react';
import './App.css';
import Instructions from './Components/Instructions';
import Game from './Components/Game'

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
