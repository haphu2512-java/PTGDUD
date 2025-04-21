import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/counterSlice';
import todoReducer from '../redux/todoSlice';
import themeReducer from '../redux/themeSlice';
import sliceReducer from '../redux/cartSlice';
import authReducer from '../redux/authSlice';
import usersReducer   from '../redux/userSlice';
import counterReducer2 from '../redux/counterSliceNangCao';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    theme: themeReducer,
    cart:sliceReducer,
    auth: authReducer,
    users:usersReducer,
    counter2:counterReducer2,
  },
});
