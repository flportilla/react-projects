
import './App.css';
import { useState, useEffect, } from 'react';
import Button from './Components/Button';
import Header from './Components/Header';
import RecordName from './Components/RecordName';
import RecordingLight from './Components/RecordingLight';
import Recordings from './Components/Recordings';
import { useReactMediaRecorder } from 'react-media-recorder'
import Audios from './Components/Audios'

const STATUS = {
  IDLE: 'IDLE',
  RECODING: 'RECODING',
  ERROR: 'ERROR'
}

function App() {

  const [status, setStatus] = useState(STATUS.IDLE)

  const [recordList, setRecords] = useState([])

  const { startRecording, stopRecording } = useReactMediaRecorder({
    audio: true,
    onStop(blob) {
      setRecords([...recordList, blob])
    }
  });

  function handleRecord(e) {
    setStatus(STATUS.RECODING)
    startRecording()
  }

  function handleStop(e) {
    setStatus(STATUS.IDLE)
    stopRecording()
  }

  return (
    <div className="App">
      <Header />
      <form className='form'>
        <RecordName />
        <div className='btn_container'>
          <RecordingLight className={status === STATUS.RECODING ? 'recording' : ''} />
          <Button onClick={handleRecord} disabled={status === STATUS.RECORDING}> Record</Button>
          <Button onClick={handleStop} disabled={status === STATUS.IDLE}> Stop</Button>
        </div>
      </form>
      <Recordings />
      <Audios sources={recordList} />
    </div>
  );
}

export default App;