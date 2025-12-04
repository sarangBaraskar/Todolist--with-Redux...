import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todo/Todoslice";

export const store = configureStore({
    reducer: todoSlice
})