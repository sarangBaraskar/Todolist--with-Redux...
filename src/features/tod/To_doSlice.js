import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello world" }]
}

export const to_doSlice = createSlice({
    name: "to_do",
    initialState,
    reducers: {
        addtodo: (state, action) => {
            const to_do = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(to_do)
        },
        removetodo: (state, action) => {
            state.todos = state.todos.filter((to_do) => to_do.id !== action.payload)

        },
        updatetodo: (state, action) => {
            const { id, text } = action.payload
            const todo = state.todos.find((t) => t.id === id)
            if (todo) {
                todo.text = text
            }
        },

    }
})

export const { addtodo, removetodo, updatetodo } = to_doSlice.actions

export default to_doSlice.reducer;
