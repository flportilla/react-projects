import './Instructions.css'

function Instructions(props) {

  const fade = (e) => e.target.parentElement.parentElement.classList.add('fade')
  const hide = (e) => e.target.classList.add('hide')
  const show = (obj) => obj.classList.add('show')

  function handleClick(e) {
    fade(e)
  }

  function handleTransitions(e) {
    hide(e);
    show(props.timerObj.current)
  }
  return (
    <>
      <div onTransitionEnd={handleTransitions} className="instructions_container">
        <div className="instructions">
          <h1>Typing Test</h1>
          <h2>How many words per minute you can type?</h2>
          <p>Hit start to get your test passage of text and begin typing. You'll have 60 seconds to type as much of the passage as you can. The timer will start when you begin typing. Good luck!</p>
          <button onClick={handleClick} className="btn">Start</button>
        </div>
      </div>
    </>
  )
}

export default Instructions