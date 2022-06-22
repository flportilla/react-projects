
import './App.css';
import Button from './Components/Button';
import Header from './Components/Header';
import RecordName from './Components/RecordName';


function App() {
  return (
    <div className="App">
      <Header />
      <form className='form'>
        <RecordName />
        <div className='btn_container'>
          <Button btnState={false}> Record</Button>
          <Button btnState={false}> Stop</Button>
        </div>
      </form>
    </div>
  );
}

export default App;
