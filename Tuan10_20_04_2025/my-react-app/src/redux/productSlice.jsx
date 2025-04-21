import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: 'Bánh kem', price: 100 },
    { id: 2, name: 'Bánh mì', price: 50 },
    { id: 3, name: 'Bánh ngọt', price: 80 },
  ],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});

export default productSlice.reducer;
