import './App.css';
import Canvas from './components/Canvas';

const canvasStyle = {
  height: Number(`${window.innerHeight - 25}`),
  width: Number(`${window.innerWidth - 25}`),
};


function App() {
  console.log(canvasStyle)
  return (
    <div className="App">
      <Canvas style={canvasStyle} />
    </div>
  );
}

export default App;
