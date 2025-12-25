import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removetodo, updatetodo } from '../features/tod/To_doSlice'

export default function Todoremove() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    const [editId, setEditId] = useState(null)
    const [editText, setEditText] = useState('')

    const handleUpdate = (id) => {
        dispatch(updatetodo({ id, text: editText }))
        setEditId(null)
        setEditText('')
    }

    return (
        <ul className="space-y-2">
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className="flex items-start justify-between gap-3 rounded-lg border bg-gray-900 p-3"
                >
                    {/* Text / Input */}
                    {editId === todo.id ? (
                        <input
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="flex-1 rounded bg-gray-800 p-2 text-white outline-none"
                        />
                    ) : (
                        <p className="flex-1 font-[cursive] text-white break-words">
                            {todo.text}
                        </p>
                    )}

                    {/* Action buttons */}
                    <div className="flex gap-2">
                        {/* Edit / Save */}
                        {editId === todo.id ? (
                            <button
                                onClick={() => handleUpdate(todo.id)}
                                className="rounded-full border border-green-300 bg-green-50 p-2 text-green-600 hover:bg-green-100"
                                aria-label="Save"
                            >
                                ✓
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    setEditId(todo.id)
                                    setEditText(todo.text)
                                }}
                                className="rounded-full border border-blue-300 bg-blue-50 p-2 text-blue-600 hover:bg-blue-100"
                                aria-label="Edit"
                            >
                                ✎
                            </button>
                        )}

                        {/* Delete */}
                        <button
                            onClick={() => dispatch(removetodo(todo.id))}
                            className="rounded-full border border-red-300 bg-red-50 p-2 text-red-600 hover:bg-red-100"
                            aria-label="Delete"
                        >
                            ✕
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}
