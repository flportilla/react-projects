import { useState, useEffect } from 'react'
import './App.css'
import Filter from './Components/Filter'
import Form from './Components/Form'
import PersonInfo from './Components/PersonInfo'
import contactServices from './services/phone-contacts'
import Notification from './Components/Notification'

const App = () => {

  //States
  const [newName, setNewName] = useState('Name')
  const [newNumber, setNewNumber] = useState('000-123456')
  const [persons, setPersons] = useState([])
  const [list, setList] = useState([])
  const [modalNotification, setModalNotification] = useState('')

  useEffect(() => {
    contactServices
      .getContacts()
      .then(contacts => { return setPersons(contacts), setList(contacts) })
  }, [modalNotification])

  //Functions
  function getName(event) {
    setNewName(event.target.value)
  }

  function getNumber(event) {
    setNewNumber(event.target.value)
  }

  function addPerson(event) {

    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber,
    }

    if (persons.find(person => person.name === newName)) {

      const repeatedContact = persons.find(person => person.name === newName)
      const confirm = window.confirm(`'${repeatedContact.name} is already added to phonebook, replace the old number with a new one?'`)

      if (confirm) {

        contactServices
          .updateContact(repeatedContact.id, personObject)

        setModalNotification('UPDATE')
        setTimeout(() => setModalNotification(''), 1000)
      }
      else return
    }
    else {

      contactServices
        .addContact(personObject)
        .then(contacts => setPersons(contacts))

      setModalNotification('ADD')
      setTimeout(() => setModalNotification(''), 1000)
    }

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

  function removeContact(event) {

    const selectedId = event.target.id
    const contactSelected = persons.find(person => person.id == selectedId)
    const confirm = window.confirm(`Delete '${contactSelected.name}'?`)

    if (confirm) {
      setModalNotification('REMOVE')
      setTimeout(() => setModalNotification(''), 1000)
      contactServices
        .removeContact(selectedId)
    }
    else return
  }

  return (
    <div className='App'>

      <Notification
        message={modalNotification} />

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

      <ul>
        <h2>Numbers</h2>
        <PersonInfo
          deleteContact={removeContact}
          list={list}
        />
      </ul>
    </div>
  )
}

export default App