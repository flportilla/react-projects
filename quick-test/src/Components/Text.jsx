import React from 'react'

function Text(props) {
  return (
    <div>
      <p>
        {props.text.p1}
      </p>
      <br />
      <p>
        {props.text.p2}
      </p>
      <br />
      <p>
        {props.text.p3}
      </p>
    </div>
  )
}

export default Text