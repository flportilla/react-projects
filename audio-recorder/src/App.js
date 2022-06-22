
import './App.css';
import { useState, useEffect, } from 'react';
import Button from './Components/Button';
import Header from './Components/Header';
import RecordName from './Components/RecordName';
import RecordingLight from './Components/RecordingLight';
import Recordings from './Components/Recordings';
import { useReactMediaRecorder } from 'react-media-recorder'
import Audios from './Components/Audios'


function App() {

  const [btnState, setBtnState] = useState(false)
  const [recLight, setRecLight] = useState('')
  const [recordList, setRecords] = useState([])

  const { startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ audio: true });

  function handleRecord(e) {

    setBtnState(true)
    setRecLight('recording')
    startRecording()
  }

  function handleStop(e) {
    stopRecording()
    setBtnState(false)
    setRecLight('')
    setRecords([...recordList, mediaBlobUrl])
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
      <Audios source={recordList} />
    </div>
  );
}

export default App;