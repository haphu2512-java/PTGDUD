import { useState } from 'react'

import './App.css'

import CalcReducer from './components/Calc'
import MemoExample from './components/ReactMemo'
import UseMemoExample from './components/UseMemo'
import UseCallbackExample from './components/UseCallback.jsx'
import Home from './pages/Home.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Home />
      {/* <CalcReducer />
      <MemoExample />
      <UseMemoExample />
      <UseCallbackExample /> */}



    </>
  )
}

export default App