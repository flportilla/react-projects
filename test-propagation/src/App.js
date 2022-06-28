import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('Enter name...')

  function getName(event) {
    setNewName(event.target.value)
  }

  function addPerson(event) {
    event.preventDefault()
    setPersons([...persons, { name: newName }])
    setNewName('')
  }
  return (
    <div>
      <h2>Phonebook</h2>

      <form>
        <div>
          name:
          <input
            onChange={getName}
            value={newName}
          />
        </div>

        <div>
          <button
            type="submit"
            onClick={addPerson}
          >
            add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {persons.map((person, index) => {
        return <div key={index}>{person.name}</div>
      })}
    </div>
  )
}

export default App