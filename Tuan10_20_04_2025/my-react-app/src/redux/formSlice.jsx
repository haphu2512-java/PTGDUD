import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weight: '',     // cân nặng (kg)
  height: '',     // chiều cao (m)
  result: null,   // kết quả BMI
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateInput: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    calculateResult: (state) => {
      const weight = parseFloat(state.weight);
      const height = parseFloat(state.height);

      if (!weight || !height || height <= 0) {
        state.result = 'Dữ liệu không hợp lệ';
        return;
      }

      const bmi = weight / (height * height);
      state.result = bmi.toFixed(2);  // làm tròn 2 chữ số
    },
  },
});

export const { updateInput, calculateResult } = formSlice.actions;
export default formSlice.reducer;
