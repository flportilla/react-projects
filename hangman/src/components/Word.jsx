import React, { useState } from 'react'
import '../styles/Word.css'

function Word({ wordToGuess, guessedLetters }) {


  return (
    <div
      className='word_container'>
      {
        wordToGuess
          .split('')
          .map((letter, index) => {
            return (
              <div
                key={index}
                className='word'>
                {guessedLetters.includes(letter) ? letter : ''}
              </div>
            )
          })
      }

    </div>
  )
}

export default Word