import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200 " style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
             <button onClick={()=> setColor("red")} className="outline-none bg-red px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor:"red"}}>Red</button>
             <button onClick={()=>setColor("Green")} className="outline-none bg-red px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor:"green"}}>Green</button>
             <button onClick={()=> setColor("Blue")} className="outline-none bg-red px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor:"blue"}}>Blue</button>
             <button onClick={()=>setColor("Yellow")} className="outline-none bg-red px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor:"yellow"}}>Yellow</button>
             <button onClick={()=>setColor("Black")} className="outline-none bg-red px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor:"Black"}}>Black</button>
             <button onClick={()=>setColor("purple")} className="bg-purple-800 outline-none rounded-full px-4 py-1 shadow-lg text-white">Purple</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
