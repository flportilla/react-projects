import React, { useEffect, useState } from 'react'
import '../styles/Word.css'

const endPoint = 'https://gist.githubusercontent.com/flportilla/15434508547bdcdfa58f4314a8704ef0/raw/24510856f6c566d99fcb6e8e740569c4063f2f3f/Words%2520List'

function Word() {

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

  console.log(wordToGuess)

  return (

    <div className='word_container'>
      {Array(wordToGuess.length)
        .fill(0)
        .map((_, index) => {
          return <div key={index} className='word'></div>
        })}

    </div>
  )
}

export default Word