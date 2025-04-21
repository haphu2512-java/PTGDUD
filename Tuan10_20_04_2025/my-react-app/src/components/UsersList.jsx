import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/userSlice';

function UsersList() {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector(state => state.users);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <p>Đang tải danh sách users...</p>;
  } else if (status === 'succeeded') {
    content = (
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    );
  } else if (status === 'failed') {
    content = <p style={{ color: 'red' }}>Có lỗi: {error}</p>;
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>Users from JSONPlaceholder</h2>
      {content}
    </div>
  );
}

export default UsersList;
