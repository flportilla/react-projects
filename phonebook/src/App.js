import { useState, useEffect, useMemo } from 'react'
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
  const [filterValue, setFilterValue] = useState('')
  const [modalNotification, setModalNotificationStatus] = useState('')
  const [notificationContent, setNotificationContent] = useState('')

  useEffect(() => {
    contactServices
      .getContacts()
      .then(contacts => setPersons(contacts))
  }, [modalNotification])

  //Functions
  function getName(event) {
    setNewName(event.target.value)
  }

  function getNumber(event) {
    setNewNumber(event.target.value)
  }

  async function addPerson(event) {

    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }

    if (persons.find(person => person.name === newName)) {

      const repeatedContact = persons.find(person => person.name === newName)
      const confirm = window.confirm(`'${repeatedContact.name} is already added to phonebook, replace the old number with a new one?'`)

      if (confirm) {
        await contactServices
          .updateContact(repeatedContact.id, personObject)

        setModalNotificationStatus('UPDATING')
        setNotificationContent(`information for ${repeatedContact.name} has been updated`)
        setTimeout(() => setModalNotificationStatus(''), 2000)
      }
    }
    else {
      await contactServices
        .addContact(personObject)

      setNotificationContent(`Contact '${personObject.name}' has been added`)
      setModalNotificationStatus('ADDING')
      setTimeout(() => setModalNotificationStatus(''), 2000)
    }

    setNewName('')
    setNewNumber('')
  }

  function filter(event) {

    setFilterValue(event.target.value)
  }

  const list = useMemo(() => {
    return persons
      .filter(person =>
        person.name.toLowerCase()
          .includes(filterValue.toLowerCase()))
  }, [filterValue, persons])

  function removeContact(event) {

    const selectedId = event.target.id
    const contactSelected = persons.find(person => person.id == selectedId)
    const confirm = window.confirm(`Delete '${contactSelected.name}'?`)

    if (confirm) {
      setNotificationContent(`'${contactSelected.name}' has been removed from your contacts`)
      setModalNotificationStatus('REMOVING')
      setTimeout(() => setModalNotificationStatus(''), 2000)
      contactServices
        .removeContact(selectedId)
    }
    else return
  }

  return (
    <div className='App'>

      <Notification
        modalNotification={modalNotification}
        notificationContent={notificationContent}
      />

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
        modalNotification={modalNotification}
      />
      <h2>Numbers</h2>
      <ul>
        <PersonInfo
          deleteContact={removeContact}
          list={list}
          modalNotification={modalNotification}
        />
      </ul>
    </div>
  )
}

export default App