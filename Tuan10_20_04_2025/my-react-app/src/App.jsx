// src/App.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './redux/usersSlice';

function App() {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  return (
    <div>
      <h1>Danh sách người dùng</h1>
      {status === 'loading' && <p>Đang tải...</p>}
      {status === 'failed' && <p>Lỗi: {error}</p>}
      <ul>
        {status === 'succeeded' && users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;