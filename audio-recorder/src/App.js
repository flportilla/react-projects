
import './App.css';
import { useState } from 'react';
import Button from './Components/Button';
import Header from './Components/Header';
import RecordName from './Components/RecordName';
import RecordingLight from './Components/RecordingLight';
import Recordings from './Components/Recordings';
import { ReactMediaRecorder } from 'react-media-recorder'

function App() {

  const [btnState, setBtnState] = useState(false)
  const [recLight, setRecLight] = useState('')
  const [records, setRecords] = useState('')

  function handleStart(e) {

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
      <div className='form'>
        <RecordName />
        <div className='btn_container'>

          <RecordingLight setLight={recLight} />
          <ReactMediaRecorder

            audio

            render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
              <>

                {mediaBlobUrl ? setRecords(mediaBlobUrl) : ''}

                <Button
                  onClick={() => {
                    startRecording();
                    handleStart();
                  }}
                  btnState={btnState}
                >
                  Record status
                </Button>

                <Button onClick={() => {
                  stopRecording();
                  handleStop()
                }}
                  btnState={!btnState}
                >
                  Stop
                </Button>
              </>
            )}

          />
        </div>
      </div>
      <Recordings />
      <audio src={records} controls></audio>
    </div>
  );
}

export default App;
