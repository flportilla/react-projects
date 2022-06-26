import './App.css';
import Firstlevel from './Firstlevel';
import { useState } from 'react';

function App() {

  const [canvasRef, SetCanvasRef] = useState();

  function listenHere(e) {
    console.log(e.target.style.backgroundColor);
  }

  function createRef(ref) {
    SetCanvasRef(ref);
  }

  return (
    <div className="App">
      <Firstlevel canvasRef={canvasRef} setCanvasRef={createRef} listenHere={listenHere} />
    </div>
  );
}

export default App;