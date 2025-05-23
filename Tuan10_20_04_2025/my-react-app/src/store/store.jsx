import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/counterSlice';
import todoReducer from '../redux/todoSlice';
import themeReducer from '../redux/themeSlice';
import sliceReducer from '../redux/cartSlice';
import authReducer from '../redux/authSlice';
import usersReducer   from '../redux/userSlice';
import counterReducer2 from '../redux/counterSliceNangCao';
import formReducer from '../redux/formSlice';
import eventReducer from '../redux/eventSlice'
import productReducer from '../redux/productSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    theme: themeReducer,
    cart:sliceReducer,
    auth: authReducer,
    users:usersReducer,
    counter2:counterReducer2,
    form:formReducer, 
    event:eventReducer,
    product: productReducer,
  },
});
