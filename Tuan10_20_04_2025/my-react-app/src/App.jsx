import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  reset,
  incrementByAmount
} from './redux/counterSliceNangCao';

function App() {
  const count = useSelector(state => state.counter2.count);
  const dispatch = useDispatch();
  const [step, setStep] = useState(0);  // lưu giá trị người dùng nhập

  const handleStepChange = e => {
    const v = Number(e.target.value);
    setStep(isNaN(v) ? 0 : v);
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(step));
    setStep(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <h1>Advanced Counter</h1>
      <h2>{count}</h2>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => dispatch(decrement())}>Giảm</button>
        <button onClick={() => dispatch(increment())} style={{ margin: '0 10px' }}>
          Tăng
        </button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>

      <div>
        <input
          type="number"
          value={step}
          onChange={handleStepChange}
          placeholder="Nhập số..."
          style={{ width: '100px', marginRight: '10px' }}
        />
        <button onClick={handleIncrementByAmount}>
          Tăng theo step
        </button>
      </div>
    </div>
  );
}

export default App;
