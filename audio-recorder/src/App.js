
import './App.css';
import { useState } from 'react';
import Button from './Components/Button';
import Header from './Components/Header';
import RecordName from './Components/RecordName';
import RecordingLight from './Components/RecordingLight';
import Recordings from './Components/Recordings';

function App() {

  const [btnState, setBtnState] = useState(false)
  const [recLight, setRecLight] = useState('')

  function handleRecord(e) {

    setBtnState(true)
    setRecLight('recording')

  }

  function handleStop(e) {

    setBtnState(false)
    setRecLight('')

  }

  return (
    <div className="App">
      <Header />
      <form className='form'>
        <RecordName />
        <div className='btn_container'>
          <RecordingLight setLight={recLight} />
          <Button onClick={handleRecord} btnState={btnState}> Record</Button>
          <Button onClick={handleStop} btnState={!btnState}> Stop</Button>
        </div>
      </form>
      <Recordings />
    </div>
  );
}

export default App;
