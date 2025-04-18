import React, { useEffect, useState } from 'react';
import { getOrders, getOrderById, updateOrder, createOrder } from '../api/overview';
import { Pencil, X } from 'lucide-react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function DataTable() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Edit modal state
  const [showEditModal, setShowEditModal] = useState(false);
  const [editOrder, setEditOrder] = useState(null);

  // Add modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [newOrder, setNewOrder] = useState({
    customerName: '',
    company: '',
    orderValue: '',
    orderDate: '',
    status: 'New'
  });

  useEffect(() => {
    getOrders()
      .then(data => setOrders(data))
      .catch(err => console.error('Load orders error:', err))
      .finally(() => setLoading(false));
  }, []);

  // Open Add Modal
  const openAddModal = () => {
    setNewOrder({ customerName: '', company: '', orderValue: '', orderDate: '', status: 'New' });
    setShowAddModal(true);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewOrder(prev => ({ ...prev, [name]: value }));
  };

  const saveAdd = async () => {
    try {
      const created = await createOrder(newOrder);
      setOrders(prev => [created, ...prev]);
      closeAddModal();
    } catch (err) {
      console.error('Failed to create order', err);
    }
  };

  // Open Edit Modal
  const openEditModal = async (id) => {
    try {
      const order = await getOrderById(id);
      setEditOrder({ ...order });
      setShowEditModal(true);
    } catch (err) {
      console.error('Failed to fetch order', err);
    }
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setEditOrder(null);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditOrder(prev => ({ ...prev, [name]: value }));
  };

  const saveEdit = async () => {
    try {
      const updated = await updateOrder(editOrder);
      setOrders(prev => prev.map(o => o.id === updated.id ? updated : o));
      closeEditModal();
    } catch (err) {
      console.error('Failed to update order', err);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
        <span className="text-muted">Loading orders...</span>
      </div>
    );
  }

  const totalPages = Math.ceil(orders.length / rowsPerPage);
  const start = (currentPage - 1) * rowsPerPage;
  const currentOrders = orders.slice(start, start + rowsPerPage);

  return (
    <>
      {/* Header and actions */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Detailed Report</h5>
        <div>
          <button className="btn btn-primary me-2" onClick={openAddModal}>Add User</button>
          <button className="btn btn-outline-danger me-2">Import</button>
          <button className="btn btn-outline-danger">Export</button>
        </div>
      </div>

      {/* Data table */}
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Customer Name</th>
              <th>Company</th>
              <th>Order Value</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map(order => (
              <tr key={order.id}>
                <td><input type="checkbox" /></td>
                <td className="d-flex align-items-center">
                  {order.avatar && (
                    <img
                      src={order.avatar}
                      alt={order.customerName}
                      className="rounded-circle me-2"
                      style={{ width: '32px', height: '32px', objectFit: 'cover' }}
                    />
                  )}
                  {order.customerName}
                </td>
                <td>{order.company}</td>
                <td>${order.orderValue}</td>
                <td>{order.orderDate}</td>
                <td>
                  <span className={
                    order.status === 'Completed' ? 'text-success' :
                    order.status === 'In-progress' ? 'text-primary' :
                    'text-info'
                  }>
                    {order.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-link p-0" onClick={() => openEditModal(order.id)}>
                    <Pencil size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <nav aria-label="Orders pagination">
        <ul className="pagination justify-content-center mt-3">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => setCurrentPage(p => p - 1)}>&laquo;</button>
          </li>
          {[...Array(totalPages)].map((_, idx) => (
            <li key={idx} className={`page-item ${currentPage === idx + 1 ? 'active' : ''}`}>  
              <button className="page-link" onClick={() => setCurrentPage(idx + 1)}>{idx + 1}</button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => setCurrentPage(p => p + 1)}>&raquo;</button>
          </li>
        </ul>
      </nav>

      {/* Edit Order Modal */}
      <Modal show={showEditModal} onHide={closeEditModal} backdrop="static" centered>
        <Modal.Header>
          <Modal.Title>Edit Order</Modal.Title>
          <button className="btn-close" onClick={closeEditModal}><X /></button>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: '60vh', overflowY: 'auto' }}>
          {editOrder && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name customer</Form.Label>
                <Form.Control
                  type="text"
                  name="customerName"
                  value={editOrder.customerName}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Company name</Form.Label>
                <Form.Control
                  type="text"
                  name="company"
                  value={editOrder.company}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Order Value</Form.Label>
                <Form.Control
                  type="number"
                  name="orderValue"
                  value={editOrder.orderValue}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Order Date</Form.Label>
                <Form.Control
                  type="date"
                  name="orderDate"
                  value={editOrder.orderDate}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <div>
                  {['New','In-progress','Completed'].map(status => (
                    <Form.Check
                      inline
                      label={status}
                      name="status"
                      type="radio"
                      id={`status-${status}`}
                      value={status}
                      key={status}
                      checked={editOrder.status === status}
                      onChange={handleEditChange}
                    />
                  ))}
                </div>
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeEditModal}>Cancel</Button>
          <Button variant="primary" onClick={saveEdit}>Save</Button>
        </Modal.Footer>
      </Modal>

      {/* Add User Modal */}
      <Modal show={showAddModal} onHide={closeAddModal} backdrop="static" centered>
        <Modal.Header>
          <Modal.Title>Add New Order</Modal.Title>
          <button className="btn-close" onClick={closeAddModal}><X /></button>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: '60vh', overflowY: 'auto' }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name customer</Form.Label>
              <Form.Control
                type="text"
                name="customerName"
                value={newOrder.customerName}
                onChange={handleAddChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Company name</Form.Label>
              <Form.Control
                type="text"
                name="company"
                value={newOrder.company}
                onChange={handleAddChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Order Value</Form.Label>
              <Form.Control
                type="number"
                name="orderValue"
                value={newOrder.orderValue}
                onChange={handleAddChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Order Date</Form.Label>
              <Form.Control
                type="date"
                name="orderDate"
                value={newOrder.orderDate}
                onChange={handleAddChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <div>
                {['New','In-progress','Completed'].map(status => (
                  <Form.Check
                    inline
                    label={status}
                    name="status"
                    type="radio"
                    id={`add-status-${status}`}
                    value={status}
                    key={status}
                    checked={newOrder.status === status}
                    onChange={handleAddChange}
                  />
                ))}
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeAddModal}>Cancel</Button>
          <Button variant="primary" onClick={saveAdd}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
