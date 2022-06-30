import { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import Form from './Components/Form'
import PersonInfo from './Components/PersonInfo'
import contactServices from './services/phone-contacts'

const App = () => {

  //States
  const [newName, setNewName] = useState('Name')
  const [newNumber, setNewNumber] = useState('000-123456')
  const [persons, setPersons] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {
    contactServices
      .getContacts()
      .then(contacts => { return setPersons(contacts), setList(contacts) })
  }, [addPerson])

  //Functions
  const getName = (event) => setNewName(event.target.value)
  const getNumber = (event) => setNewNumber(event.target.value)

  function addPerson(event) {

    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber,
    }

    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    contactServices
      .addContact(personObject)
      .then(contacts => setPersons(contacts))

    setNewName('')
    setNewNumber('')
  }

  function filter(event) {
    const filterValue = (event.target.value).toLowerCase()

    const filteredContacts = persons
      .filter(person =>
        person.name.toLowerCase()
          .includes(filterValue))

    setList(filteredContacts)
  }

  function deleteContact(event) {

    const contactSelected = event.target.id
    contactServices
      .removeContact(contactSelected)

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
        deleteContact={deleteContact}
        list={list}
      />
    </div>
  )
}

export default App