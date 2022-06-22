import React from 'react'
import '../Styles/Button.css'

function Button({ children, btnState, onClick }) {

  return (

    <button
      disabled={btnState}
      className="btn"
      type='submit'
      onClick={onClick}
    >
      {children}
    </button>

  )
}

export default Button