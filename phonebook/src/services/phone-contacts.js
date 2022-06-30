import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

function getContacts() {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

function addContact(personObj) {
  const request = axios.post(baseUrl, personObj)
  return request.then(response => response.data)
}

function removeContact(id) {
  const request = axios.delete(`http://localhost:3001/persons/${id}`)
  return request.then(response => response.data)
}

export default { getContacts, addContact, removeContact }