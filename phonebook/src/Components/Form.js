import React from 'react'

function Form({ addPerson, getName, getNumber, newName, newNumber }) {

  return (
    <form>
      <div key={'name'}>
        name:
        <input key={newName}
          onChange={getName}
          value={newName}
        />
      </div>
      <div key={'number'}>
        number:
        <input
          key={newNumber}
          onChange={getNumber}
          value={newNumber}
        />
      </div>
      <div key={'add'}>
        <button
          type="submit"
          onClick={addPerson}
        >
          add</button>
      </div>
    </form>

  )
}

export default Form