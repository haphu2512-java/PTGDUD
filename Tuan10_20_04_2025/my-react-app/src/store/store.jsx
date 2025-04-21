import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/counterSlice';
import todoReducer from '../redux/todoSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
});
