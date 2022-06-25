import React from 'react'

function InputTest(props) {

  function handleGameStart(e) {

    let counter = 0;

    const intervalId = setInterval(() => {

      props.settimer(props.timer - counter);
      counter++;

      if (props.timer - counter < 0) {

        clearInterval(intervalId);
        e.target.disabled = true;

        handleSubmit(e)
          ;
      }
    }, 1000);
  }

  const textToArr =
    props.text.p1.toLowerCase().split(' ')
      .concat(props.text.p2.toLowerCase().split(' '))
      .concat(props.text.p3.toLowerCase().split(' '));

  function handleSubmit(e) {
    const inputValue = e.target.value
      .toLowerCase()
      .trim()
      .split(' ')
      .filter(word => word !== '')

    //slice to the input array length, filter if the word is in the text array and check if the word is in the input array

    const correctWords = textToArr.slice(0, inputValue.length).filter(word => inputValue.includes(word)).length;

    alert(`You got ${correctWords} words per minute!`)
  }

  return (
    <form className='text_area_container'>
      <textarea
        placeholder=''
        autoFocus
        defaultValue={''}
        onFocus={handleGameStart}
      >
      </textarea>
    </form>
  )
}

export default InputTest