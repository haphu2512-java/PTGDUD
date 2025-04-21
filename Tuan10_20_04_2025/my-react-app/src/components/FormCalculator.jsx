import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateInput, calculateResult } from '../redux/formSlice';

function FormCalculator() {
  const { weight, height, result } = useSelector(state => state.form);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateInput({ field: e.target.name, value: e.target.value }));
  };

  const handleCalculate = () => {
    dispatch(calculateResult());
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h2>Tính BMI</h2>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="number"
          name="weight"
          placeholder="Nhập cân nặng (kg)"
          value={weight}
          onChange={handleChange}
          style={{ width: '80%', padding: '8px', marginBottom: '10px' }}
        />
        <input
          type="number"
          name="height"
          placeholder="Nhập chiều cao (m)"
          value={height}
          onChange={handleChange}
          style={{ width: '80%', padding: '8px' }}
        />
      </div>

      <button onClick={handleCalculate} style={{ marginTop: '10px' }}>
        Tính BMI
      </button>

      {result !== null && (
        <div style={{ marginTop: '20px' }}>
          <h3>Kết quả BMI: {result}</h3>
        </div>
      )}
    </div>
  );
}

export default FormCalculator;
