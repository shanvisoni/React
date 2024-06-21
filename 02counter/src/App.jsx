import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)
  // let counter=15
const addValue=()=>{
 if(counter<20){
  counter=counter+1
setCounter(counter)

// using multiple, it still increases only 1 value bz of bundle form passing
// setCounter(counter)
// setCounter(counter)
// setCounter(counter)
// setCounter(counter)
// setCounter(counter)

//during passing values in setCounter it sends values in bunch 

// it increases 4 time bz everytime it takes previous value and increse that
// setCounter(prevCounter => prevCounter + 1)
// setCounter(prevCounter => prevCounter + 1)
// setCounter(prevCounter => prevCounter + 1)
// setCounter(prevCounter => prevCounter + 1)
 }
  
 
}

const removeVal=()=>{
  
  if(counter>0){
  setCounter(counter-1)
  }
}
  return (
    <>
      <h1>Shanvi😇</h1>
      <h2>Counter value: {counter}</h2>

  <button onClick={addValue}>Add Value{counter}</button>
  <br />
  <button onClick={removeVal}>Remove value {counter}</button>
  
  <p>footer: {counter}</p>
    </>
  )
}

export default App
