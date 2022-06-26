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
    const ctx = e.target.getContext('2d');
    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, 10, 0, 2 * Math.PI)
    ctx.fillStyle = randomColor();
    ctx.fill();
    balls.push({ x: e.clientX, y: e.clientY, color: 'red' })

  }

  return (
    <div className="App">
      <canvas width={canvasStyle.width} height={canvasStyle.height} className='topCanvas' onClick={handleClick} />
      <Canvas randomColor={randomColor} balls={balls} style={canvasStyle} />

    </div>
  );
}

export default App;
