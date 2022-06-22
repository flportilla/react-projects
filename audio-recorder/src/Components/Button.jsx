import React from 'react'
import '../Styles/Button.css'

function Button({ children, btnState }) {
  return (
    <div className="btn_container">
      <button
        disabled={btnState}
        className="btn"
        type='submit'
      >
        {children}
      </button>
    </div>
  )
}

export default Button