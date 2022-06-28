import React from 'react'
import '../Styles/Button.css'

function Button({ children, disabled, onClick }) {

  return (

    <button
      disabled={disabled}
      className="btn"
      type='button'
      onClick={onClick}
    >
      {children}
    </button>

  )
}

export default Button