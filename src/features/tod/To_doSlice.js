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

    }
})

export const { addtodo, removetodo } = to_doSlice.actions

export default to_doSlice.reducer;
