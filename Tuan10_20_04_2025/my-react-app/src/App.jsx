import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './redux/todoSlice';

function App() {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() === '') return;
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>To-do List</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Thêm công việc..."
      />
      <button onClick={handleAdd} style={{ marginLeft: '10px' }}>
        Thêm
      </button>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              marginBottom: '10px',
            }}
          >
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{ cursor: 'pointer', marginRight: '10px' }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Xoá
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;