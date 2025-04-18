import React from "react";

// src/components/AddUserModal.js
function AddUserModal({ show, onClose, onAdd }) {
    const [formData, setFormData] = React.useState({
        customerName: '',
        company: '',
        orderValue: '',
        orderDate: '',
        status: 'New'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAdd = () => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            name: formData.customerName,
            company: { name: formData.company },
            orderValue: formData.orderValue,
            orderDate: formData.orderDate,
            status: formData.status
        })
            .then(response => {
                onAdd(formData);
                onClose();
            })
            .catch(error => console.error('Error adding user:', error));
    };

    if (!show) return null;

    return (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add New User</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="customerName" className="form-label">Customer Name</label>
                            <input type="text" className="form-control" id="customerName" name="customerName" value={formData.customerName} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="company" className="form-label">Company</label>
                            <input type="text" className="form-control" id="company" name="company" value={formData.company} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="orderValue" className="form-label">Order Value</label>
                            <input type="text" className="form-control" id="orderValue" name="orderValue" value={formData.orderValue} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="orderDate" className="form-label">Order Date</label>
                            <input type="text" className="form-control" id="orderDate" name="orderDate" value={formData.orderDate} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="status" className="form-label">Status</label>
                            <select className="form-control" id="status" name="status" value={formData.status} onChange={handleChange}>
                                <option value="New">New</option>
                                <option value="In-progress">In-progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleAdd}>Add User</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddUserModal;