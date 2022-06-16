import React from 'react'
import '../styles/Alphabet.css'

const alphabeth = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


function Alphabet() {
  return (
    <div className='alphabet_container'>
      {
        alphabeth.map(letter =>
          <div className='letter' key={letter}>{letter}</div>)
      }
    </div>
  )
}

export default Alphabet