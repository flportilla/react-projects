import React from 'react'

function PersonInfo({ list }) {
  return (
    <>
      {
        list.map(person => {
          return <div key={person.id}>{person.name} - {person.number}</div>
        })
      }
    </>
  )
}

export default PersonInfo