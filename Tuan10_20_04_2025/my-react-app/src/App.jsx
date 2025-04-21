import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './redux/themeSlice';

function App() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const appStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#333' : '#fff',
    minHeight: '100vh',
    padding: '20px',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={appStyle}>
      <button onClick={() => dispatch(toggleTheme())} style={{ marginBottom: '20px' }}>
        Đổi giao diện ({theme === 'light' ? 'Dark' : 'Light'})
      </button>

    
    </div>
  );
}

export default App;
