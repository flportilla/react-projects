
import './App.css';
import Example from './randomComponent';

function App() {
  return (
    <div className="App">
      <Example />
    </div>
  );
}

//reload page every 5 seconds
setInterval(() => {
  window.location.reload();
}, 3000);

export default App;
