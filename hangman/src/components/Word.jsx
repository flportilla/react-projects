import React, { useEffect, useState } from 'react'
import '../styles/Word.css'

function Word({ wordToGuess }) {

  console.log(wordToGuess.split('').sort())

  return (

    <div
      className='word_container'>

      {Array(wordToGuess.length)
        .fill(0)
        .map((_, index) => {
          return (
            <div
              key={index}
              className='word'>

            </div>
          )
        })}

    </div>
  )
}

export default Word