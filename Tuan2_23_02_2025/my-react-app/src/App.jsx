import { useState } from 'react'
import './App.css'
import Add2Numbers from './components/Add2Numbers'
import Calculation from './components/Calculation'
import Name from './components/Name'
import ToDoApp from './components/ToDoApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Add2Numbers />
      <hr></hr>
      <Calculation />
      <hr></hr>
      <Name />
      <hr></hr>
      <ToDoApp />
    </>
  )
}

export default App
