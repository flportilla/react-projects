import React from 'react'

function PersonInfo({ list, deleteContact }) {
  return (
    <>
      {
        list.map(person => {
          return <li
            className='note'
            key={person.id}>
            {person.name} - {person.number}
            <button
              id={person.id}
              onClick={deleteContact}
              type='button'>
              delete
            </button>
          </li >
        })
      }
    </>
  )
}

export default PersonInfo