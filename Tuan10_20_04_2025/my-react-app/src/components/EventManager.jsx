import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEvent, editEvent, deleteEvent } from '../redux/eventSlice';

function EventManager() {
  const events = useSelector(state => state.event.events);
  const dispatch = useDispatch();

  const [form, setForm] = useState({ title: '', date: '', description: '' });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      dispatch(editEvent({ id: editId, updatedEvent: form }));
      setEditId(null);
    } else {
      dispatch(addEvent(form));
    }
    setForm({ title: '', date: '', description: '' });
  };

  const handleEdit = (event) => {
    setForm({
      title: event.title,
      date: event.date,
      description: event.description,
    });
    setEditId(event.id);
  };

  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto' }}>
      <h2>Quản lý Sự kiện</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="title"
          placeholder="Tên sự kiện"
          value={form.title}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
          required
        />
        <textarea
          name="description"
          placeholder="Mô tả sự kiện"
          value={form.description}
          onChange={handleChange}
          rows="3"
          style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
          required
        ></textarea>
        <button type="submit" style={{ padding: '8px 16px' }}>
          {editId ? 'Cập nhật' : 'Thêm sự kiện'}
        </button>
      </form>

      <ul>
        {events.map(event => (
          <li key={event.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <h3>{event.title}</h3>
            <p><strong>Ngày:</strong> {event.date}</p>
            <p>{event.description}</p>
            <button onClick={() => handleEdit(event)} style={{ marginRight: '10px' }}>
              Sửa
            </button>
            <button onClick={() => handleDelete(event.id)} style={{ color: 'red' }}>
              Xoá
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventManager;
