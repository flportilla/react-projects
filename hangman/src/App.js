
import '../src/styles/App.css';
import Alphabet from './components/Alphabet';
import Hangman from './components/Hangman';
import Header from './components/Header';
import Word from './components/Word';
import React, { useEffect, useState } from 'react';

const endPoint = 'https://gist.githubusercontent.com/flportilla/15434508547bdcdfa58f4314a8704ef0/raw/24510856f6c566d99fcb6e8e740569c4063f2f3f/Words%2520List'


function App() {

  const [wordToGuess, setWord] = useState('')

  useEffect(() => {

    const fetchWord = async () => {

      const response = await fetch(endPoint)
      const data = await response.json()

      const randomWord = data[Math.floor(Math.random() * data.length)]

      setWord(randomWord)
    }

    fetchWord()

  }, [])

  return (

    <div className="App">
      <Header />

      <div
        className='hangman_container'>
        <Hangman />
      </div>

      <Word
        wordToGuess={wordToGuess} />
      <Alphabet />
    </div>

  );
}

export default App;
