import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)
let myObj = {
  username: "Shanvi",
  age: 19
}
let myArr = [1,2,3,4,5]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
     <Card channel="This is tailwind" someObj={myObj} someArr={myArr} />
     <Card username="Shanu" btnText="Visit Me"/>
     <Card btnText="Click Me"/>

    </>
  )
}

export default App
