import './App.css';

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
      <canvas
        width={canvasStyle.width}
        height={canvasStyle.height}
        style={{ backgroundColor: '#252525' }}
      />

    </div>
  );
}

export default App;
