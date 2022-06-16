
import '../src/styles/App.css';
import Hangman from './components/Hangman';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='hangman_container'>
        <Hangman />
      </div>
    </div>
  );
}

export default App;
