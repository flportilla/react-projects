import React from 'react'
import '../styles/Alphabet.css'

const alphabeth = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function Alphabet({ handleClick, guessedLetters }) {
  return (
    <div className='alphabet_container'>
      {
        alphabeth.map(letter =>
          <button
            type="button"
            className={`letter ${guessedLetters.includes(letter) ? 'pressed' : ''}`}
            key={letter}
            onClick={handleClick}
          >
            {letter}
          </button>)
      }
    </div>
  )
}

export default Alphabet