
import '../src/styles/App.css';
import Alphabet from './components/Alphabet';
import Hangman from './components/Hangman';
import Header from './components/Header';
import Word from './components/Word';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='hangman_container'>
        <Hangman />
      </div>
      <Word />
      <Alphabet />
    </div>
  );
}

export default App;
