import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/authSlice';

function Login() {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector(state => state.auth);

  const handleLogin = () => {
    dispatch(login({ username: 'Hà Xuân Phu' }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      {isLoggedIn ? (
        <div>
          <h3>Xin chào, {user.username}!</h3>
          <button onClick={handleLogout}>Đăng xuất</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Đăng nhập</button>
      )}
    </div>
  );
}

export default Login;
