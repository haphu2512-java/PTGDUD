import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/counterSlice';
import todoReducer from '../redux/todoSlice';
import themeReducer from '../redux/themeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    theme: themeReducer,
  },
});
