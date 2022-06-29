import React from 'react'

function PersonInfo({ persons }) {

  return (
    <>
      {
        persons.map(person => {
          return <div key={person.id}>{person.name} - {person.number}</div>
        })
      }
    </>
  )
}

export default PersonInfo