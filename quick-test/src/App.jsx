import './App.css';
import { useEffect, useRef } from 'react';
import Instructions from './Instructions';


function App() {


  const instructionsRef = useRef(null)
  useEffect(() => { instructionsRef.current.focus() })
  const hide = () => instructionsRef.current.classList.add('hide')


  return (
    <div className="App">
      <div
        onTransitionEnd={hide}
        ref={instructionsRef}
        className="instructions_container"
      >
        <Instructions
          instructionsRef={instructionsRef} />
      </div>
      <div className='game_container'>

      </div>

    </div>
  );
}

export default App;
