import './App.css';
import freecodecampLogo from '../src/img/freecodecamp-logo.png'
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

const divStyle = {
  backgroundColor: 'red',
  color: 'green'
}


function App() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function resetCounter() {
    setCount(0);
  }

  return (
    <div className="App">

      <div className='freecodecamp_logo_container'>
        <img
          className='freecodecamp_logo'
          src={freecodecampLogo}
          alt="logo de freeCodeCamp"
        />
      </div>
      <Counter
        numClicks={count}
      />
      <div className='main_container'>
        <Button
          buttonText='Click'
          isClickingButton={true}
          handleClick={handleClick}
        />

        <div style={ }

        <Button
          buttonText='Reset'
          isClickingButton={false}
          handleClick={resetCounter}
        />
      </div>

    </div>
  );
}

export default App;
