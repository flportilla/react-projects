import { useState } from 'react'
import Filter from './Components/Filter'
import Form from './Components/Form'
import PersonInfo from './Components/PersonInfo'

const App = () => {

  //States
  const [newName, setNewName] = useState('Name')
  const [newNumber, setNewNumber] = useState('000-123456')
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [list, setList] = useState(persons)


  //Functions
  const getName = (event) => setNewName(event.target.value)
  const getNumber = (event) => setNewNumber(event.target.value)

  function addPerson(event) {

    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber,
      id: list.length + 1
    }

    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    setPersons(persons.concat(personObject))
    setList([...list, personObject])

    setNewName('')
    setNewNumber('')
  }

  function filter(event) {
    const filterValue = (event.target.value).toLowerCase()

    const filterDoneRight = persons.filter(person => {
      return (person.name).toLowerCase().includes(filterValue)
    })
    setList([...filterDoneRight])
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        onChange={filter}
      />

      <h2>add a new</h2>
      <Form
        addPerson={addPerson}
        getName={getName}
        getNumber={getNumber}
        newName={newName}
        newNumber={newNumber}
      />

      <h2>Numbers</h2>
      <PersonInfo
        list={list}
      />
    </div>
  )
}

export default App