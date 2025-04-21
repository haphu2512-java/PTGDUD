import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, setUserInfo } from './redux/authSlice';

function App() {
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim() === '') return;
    dispatch(login({ username }));
    setUsername('');
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      {!isLoggedIn ? (
        <>
          <h2>Đăng nhập</h2>
          <input
            type="text"
            placeholder="Nhập tên..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin} style={{ marginLeft: '10px' }}>
            Đăng nhập
          </button>
        </>
      ) : (
        <>
          <h2>Chào mừng, {user.username}!</h2>
          <button onClick={handleLogout}>
            Đăng xuất
          </button>
        </>
      )}
    </div>
  );
}

export default App;
