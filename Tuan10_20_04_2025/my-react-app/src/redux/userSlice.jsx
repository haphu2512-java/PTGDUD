import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 1. Định nghĩa thunk để fetch dữ liệu từ API
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, thunkAPI) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      // Nếu API trả về lỗi, ném ra để thunk catch
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data; // payload cho action fulfilled
  }
);

const initialState = {
  users: [],
  status: 'idle',   // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // bạn có thể thêm reducers đồng bộ ở đây nếu cần
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
