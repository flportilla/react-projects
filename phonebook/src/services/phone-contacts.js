import axios from "axios";

const baseUrl = '/api/persons'

function getContacts() {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

function addContact(personObj) {
  const request = axios.post(baseUrl, personObj)
  return request.then(response => response.data)
}

function removeContact(id) {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

function updateContact(id, personObj) {
  return axios.put(`${baseUrl}/${id}`, personObj)
}

export default { getContacts, addContact, removeContact, updateContact }