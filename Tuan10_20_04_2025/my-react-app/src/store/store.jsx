import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/counterSlice';
import todoReducer from '../redux/todoSlice';
import themeReducer from '../redux/themeSlice';
import sliceReducer from '../redux/cartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    theme: themeReducer,
    cart:sliceReducer,
  },
});
