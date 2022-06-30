import React from 'react'
import '../App.css'

export default function Notification({ message }) {

  switch (message) {
    case 'ADD':
      return <div className='add'>Contact added</div>
      break;
    case 'REMOVE':
      return <div className='remove'>Contact removed</div>
      break;
    case 'UPDATE':
      return <div className='update'>Contact updated</div>
      break;
    default: return <></>
      break;
  }

}
