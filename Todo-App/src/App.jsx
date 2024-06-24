import React,{useState} from 'react'
import Header from './components/header.jsx'
import Compo from './components/component.jsx'
import TodoBtn from './components/footer.jsx'
import './style.css'
import Counter from './components/CounterComponenet.jsx'
function App() {
 const [isVisible, setVisible] = useState(true)

  return (
    <div className='todo-container'>
      <Counter/>
    <Header AppName="Todoie App" />
  
    <Compo item="eat" />
    <Compo completed={true} item="code" />
    <Compo item="walk" />
    <Compo item="development" />
    {isVisible ? <Compo item="sleep" /> : <></>}
    
    <button onClick={()=>{setVisible(!isVisible)}} className='border bg-gray-100 rounded px-0.5 ml-20'>❌ Sleep✔️</button>
    <TodoBtn/>
   </div>
  )
}

export default App
