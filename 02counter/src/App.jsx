import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  return (
    <>
      <div>
       <h1>
        My counter App using
       </h1>
       
      </div>
      <h1>Vite + React</h1>
      <h3>Count is {count}</h3>
      <div className="card">
        <button onClick={() =>{
          if(count<20)
          {setCount((count) => count + 1)}
        }}>
          AddCount
        </button>
        <br />
        <button onClick={()=> {
          if(count>0)
          {
            setCount(count-1)
          }
         }}>
          RemoveCount
        </button>
      
      </div>
    
    </>
  )
}

export default App
