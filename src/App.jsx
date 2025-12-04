import { useState } from 'react'
import Todoadd from './component/Todoadd'
import Todoremove from './component/Todoremove'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='m-7 p-10 font-[cursive] text-black font-bold text-2xl'># TODO List Using React-Redux.</h1>
    <Todoadd/>
    <Todoremove/>
      
    </>
  )
}

export default App
