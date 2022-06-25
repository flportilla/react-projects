import { useState } from 'react';
import './App.css';
import Instructions from './Components/Instructions';
import Game from './Components/Game'



function App() {
  const text = {
    p1: 'Now it is the time to act on behalf of women everywhere. If we take bold steps to better the lives of women, we will be taking bold steps to better the lives of children and families too. Families rely on mothers and wives for emotional support and care. Families rely on women for labor in the home. And increasingly, everywhere, families rely on women for income needed to raise healthy children and care for other relatives.',
    p2: 'As long as discrimination and inequities remain so commonplace everywhere in the world, as long as girls and women are valued less, fed less, fed last, overworked, underpaid, not schooled, subjected to violence in and outside their homes -- the potential of the human family to create a peaceful, prosperous world will not be realized.',
    p3: 'Let -- Let this conference be our -- and the world’s -- call to action. Let us heed that call so we can create a world in which every woman is treated with respect and dignity, every boy and girl is loved and cared for equally, and every family has the hope of a strong and stable future. That is the work before you. That is the work before all of us who have a vision of the world we want to see -- for our children and our grandchildren.',
  }
  const [gameObj, setgameObj] = useState()
  const [textareaVal, settextareaVal] = useState('')
  const [timer, settimer] = useState(60)
  return (
    <div className="App">
      <Instructions
        gameObj={gameObj}
      />
      <Game
        setgameObj={setgameObj}
        textareaVal={textareaVal}
        settextareaVal={settextareaVal}
        timer={timer}
        settimer={settimer}
        text={text}
      />
    </div>
  );
}


export default App;
