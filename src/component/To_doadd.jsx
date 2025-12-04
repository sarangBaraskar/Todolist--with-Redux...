import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtodo } from '../features/tod/To_doSlice'

export default function Todoadd() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()


  const addHandler=(e)=>{
    e.preventDefault()
    dispatch(addtodo(input))
    setInput('')
  }

  return (
    <>
      <div className="max-h-screen bg-gray-900 flex items-center justify-center p-4">
        <form onSubmit={addHandler} className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-white font-[cursive] text-xl font-semibold mb-4 text-center">
            Simple Form
          </h2>

          <div className="flex gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Enter something..."
              className="flex-1 px-4 py-2 font-[cursive] rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="px-6 py-2 font-[cursive] bg-blue-600 rounded-md text-white font-medium hover:bg-blue-700 transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

    </>
  )
}