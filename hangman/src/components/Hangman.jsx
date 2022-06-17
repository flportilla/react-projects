import React from 'react'
import '../styles/Hangman.css'
function Hangman({ score }) {

  return (
    <>
      <div className='gallow'>
        <div className="man_container">
          <div className={`head ${score <= 6 ? 'show' : ''}`}></div>
          <div className={`torso ${score <= 5 ? 'show' : ''}`}></div>
          <div className={`left_arm ${score <= 4 ? 'show' : ''}`}></div>
          <div className={`right_arm ${score <= 3 ? 'show' : ''}`}></div>
          <div className={`left_leg ${score <= 2 ? 'show' : ''}`}></div>
          <div className={`right_leg ${score <= 1 ? 'show' : ''}`}></div>
        </div>
      </div>
    </>
  )
}

export default Hangman