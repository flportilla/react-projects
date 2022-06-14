import React from "react";
import '../stylesheet/Button.css';

function Button({ buttonText, isClickingButton, handleClick }) {

  return (
    <button
      className={isClickingButton ? 'clickBtn' : 'resetBtn'}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  )
}

export default Button;