import React from 'react'
import '../Styles/Button.css'

function Button({ children, btnState, onClick }) {

  return (

    <button
      disabled={btnState}
      className="btn"
      type='button'
      onClick={onClick}
    >
      {children}
    </button>

  )
}

export default Button