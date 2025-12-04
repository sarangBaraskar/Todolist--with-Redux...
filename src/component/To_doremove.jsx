import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removetodo } from '../features/tod/To_doSlice'


export default function Todoremove() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    return (
        <>

            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex mt-3 items-start justify-between gap-3 rounded-lg border bg-gray-900 p-3"
                    >
                        {/* Content */}
                        <p className="flex-1 font-[cursive] text-white break-words">
                            {todo.text}
                        </p>

                        {/* Delete button */}
                        <div className="flex-shrink-0">
                            <button
                                type="button"
                                onClick={() => dispatch(removetodo(todo.id))}
                                className="inline-flex items-center justify-center rounded-full border border-red-200 bg-red-50 p-2 text-red-600 hover:bg-red-100 hover:border-red-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                aria-label="Delete"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                    <line x1="6" y1="18" x2="18" y2="6" />
                                </svg>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>



        </>
    )
}
