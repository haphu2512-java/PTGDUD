// src/redux/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos[action.payload];
      todo.completed = !todo.completed;
    },
    removeTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;