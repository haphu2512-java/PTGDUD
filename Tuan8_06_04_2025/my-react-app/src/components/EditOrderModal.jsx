import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function EditOrderModal({ show, handleClose, order, handleSave }) {
  const [editedOrder, setEditedOrder] = useState({ ...order });

  useEffect(() => {
    setEditedOrder({ ...order });
  }, [order]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedOrder((prev) => ({ ...prev, [name]: value }));
  };

  const onSave = () => {
    handleSave(editedOrder);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Chỉnh sửa đơn hàng</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formCustomerName">
            <Form.Label>Tên khách hàng</Form.Label>
            <Form.Control
              type="text"
              name="customerName"
              value={editedOrder.customerName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formCompany">
            <Form.Label>Công ty</Form.Label>
            <Form.Control
              type="text"
              name="company"
              value={editedOrder.company}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formOrderValue">
            <Form.Label>Giá trị đơn hàng</Form.Label>
            <Form.Control
              type="number"
              name="orderValue"
              value={editedOrder.orderValue}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formOrderDate">
            <Form.Label>Ngày đặt hàng</Form.Label>
            <Form.Control
              type="date"
              name="orderDate"
              value={editedOrder.orderDate}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formStatus">
            <Form.Label>Trạng thái</Form.Label>
            <Form.Control
              as="select"
              name="status"
              value={editedOrder.status}
              onChange={handleChange}
            >
              <option value="New">New</option>
              <option value="In-progress">In-progress</option>
              <option value="Completed">Completed</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Hủy
        </Button>
        <Button variant="primary" onClick={onSave}>
          Lưu thay đổi
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditOrderModal;
