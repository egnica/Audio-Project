
import './App.css';
import { useState } from 'react';
import sound from "../src/audioFolder/Barlow2022AugustFF.mp3"

function App() {

let openArray = [];



const [playerNumber, setPlayerNumber] = useState(0);


  const audio = new Audio(sound);

 for(let i = 0; i < playerNumber; i++){

    openArray.push('');

 } 
 const audioFunctionPlay = () => {
    audio.play();
 }
 const audioFunctionStop = () => {
    audio.pause();
 }

 const Input = () => {
  return <input placeholder="Your input here" />;
  };


  const [inputList, setInputList] = useState([]);
  const clickHandler = () => {
    console.log(openArray);



    
 }

 
  const onAddBtnClick = event => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };


  return (
    
    <div className="App">
      <br/>
      <button onClick={audioFunctionPlay}>Play</button>
      <button onClick={audioFunctionStop}>Stop</button>
<br/><br/>
<label>How many players: </label>
      <input type='number' onChange = {event => setPlayerNumber(event.target.value)} value = {playerNumber}/>
      <button onClick = {clickHandler}>Enter</button>

      <div>
      <button onClick={onAddBtnClick}>Add input</button>
      {inputList}
    </div>

    </div>
   

  );
}

export default App;
