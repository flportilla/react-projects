import './App.css';
import Canvas from './Canvas';

function App() {

  const canvasStyle = {
    height: Number(`${window.innerHeight}`),
    width: Number(`${window.innerWidth}`),
  };


  function randomColor() {
    return ('#' + Math.floor(Math.random() * 16777215).toString(16));
  }


  return (
    <div className="App">
      <Canvas style={canvasStyle} />
    </div>
  );
}

export default App;
