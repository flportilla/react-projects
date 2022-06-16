
import '../src/styles/App.css';
import Alphabet from './components/Alphabet';
import Hangman from './components/Hangman';
import Header from './components/Header';
import Word from './components/Word';
import React, { useEffect, useState } from 'react';


function App() {

  const [word, setWord] = useState('');

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
