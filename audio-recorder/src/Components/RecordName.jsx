import React from 'react'
import "../Styles/RecordName.css"

function RecordName() {
  return (
    <div
      className='title_container'
    >
      <label htmlFor='record_name'>Title: </label>
      <input
        name='record_name'
        type={'text'}
        placeholder="my_recording"
      />
    </div>
  )
}

export default RecordName