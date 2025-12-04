import { configureStore } from "@reduxjs/toolkit";
import  to_doSlice  from "../features/tod/To_doSlice";

export const store= configureStore({
    reducer: to_doSlice
})