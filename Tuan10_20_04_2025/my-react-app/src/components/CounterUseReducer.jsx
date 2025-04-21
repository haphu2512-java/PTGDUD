
import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    default: return state;
  }
};

export default function CounterUseReducer() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h3>useReducer (local)</h3>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}