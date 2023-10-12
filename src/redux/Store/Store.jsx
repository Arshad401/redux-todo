import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../Reducers/TodoReducer";
export default configureStore ({
    reducer: {
        todos:TodoReducer
    }
})