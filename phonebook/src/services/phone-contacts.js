import axios from "axios";

const baseUrl = '/api/persons'

function getContacts() {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

async function addContact(personObj) {

  const response = await axios.post(baseUrl, personObj)
  return response.data
}

function removeContact(id) {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

function updateContact(id, personObj) {
  return axios.put(`${baseUrl}/${id}`, personObj)
}

export default { getContacts, addContact, removeContact, updateContact }