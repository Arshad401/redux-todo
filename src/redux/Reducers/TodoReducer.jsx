import { createSlice } from "@reduxjs/toolkit";
import { state } from "xpress/lib/fs";
const INITIAL_STATE = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "mytodos",
  initialState: INITIAL_STATE,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        value: action.payload,
        editFlag: true,
      });
    },
    deletTodo: (state, action) => {
      const filtered = state.todos.filter((item) => item.id != action.payload);
      state.todos = filtered;
    },
    editTodo: (state, action) => {
      state.todos.forEach((item) => {
        if (item.id == action.payload) {
          item.editFlag = false;
        }
      });
    },
    saveTodo: (state, action) => {
      state.todos.find((item) => {
        if (item.id == action.payload.id) {
          item.value = action.payload.value;
          item.editFlag = true;
        }
      });
    },
  },
});

export const { addTodo, deletTodo, editTodo, saveTodo } = todoSlice.actions;
export default todoSlice.reducer;
