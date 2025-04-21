import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())} style={{ marginRight: '10px' }}>
        Tăng
      </button>
      <button onClick={() => dispatch(decrement())}>
        Giảm
      </button>
    </div>
  );
}

export default App;
