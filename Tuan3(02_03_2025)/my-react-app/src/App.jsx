import { useState } from 'react'
import GiaoDien from './components/GiaoDien'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GiaoDien />
    </>
  )
}

export default App