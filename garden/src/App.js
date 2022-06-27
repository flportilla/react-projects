import './App.css';
import Canvas from './Canvas';

function App() {

  const balls = []

  const canvasStyle = {
    height: Number(`${window.innerHeight}`),
    width: Number(`${window.innerWidth}`),
  };

  function randomColor() {
    return ('#' + Math.floor(Math.random() * 16777215).toString(16));
  }

  function handleClick(e) {
    balls.push({ x: e.clientX, y: e.clientY, color: randomColor(), radius: 10, ballPosition: 0 });
  }

  return (
    <div className="App">
      <canvas width={canvasStyle.width} height={canvasStyle.height} className='topCanvas' onClick={handleClick} />
      <Canvas onClick={handleClick} randomColor={randomColor} balls={balls} style={canvasStyle} />

    </div>
  );
}

export default App;
