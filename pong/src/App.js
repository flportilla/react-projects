import './App.css';
import { useEffect, useState, useRef } from 'react';
import StartScreen from './components/StartScreen';
import Score from './components/Score';

function App() {

  const [score, setScore] = useState(0)
  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    contextRef.current = context
  }, [canvasRef, contextRef])

  const contextHelper = () => {
    const contex = contextRef.current
    return contex
  }

  const canvasHelper = () => {
    const canvas = canvasRef.current
    return canvas
  }


  return (
    <div className="App">

      <div className="container">
        <canvas
          height='500'
          width='600'
          style={{ border: '1px solid #7a7c8f' }}
          ref={canvasRef}
        >
        </canvas>
      </div>

      <StartScreen canvasRef={canvasHelper} contextRef={contextHelper} setScore={setScore} score={score} />
      <Score score={score} />
    </div>
  );
}

export default App;



// 
// 



