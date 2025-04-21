import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './redux/cartSlice';

function CartApp() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);

  const handleAdd = () => {
    if (!productName || productPrice <= 0) return;
    const newItem = {
      id: Date.now(),
      name: productName,
      price: parseFloat(productPrice),
      quantity: 1,
    };
    dispatch(addItem(newItem));
    setProductName('');
    setProductPrice(0);
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Giỏ hàng 🛒</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Tên sản phẩm"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          type="number"
          placeholder="Giá"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button onClick={handleAdd}>Thêm vào giỏ</button>
      </div>

      <table style={{ width: '80%', margin: '0 auto', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price.toLocaleString()} đ</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
                  style={{ width: '60px' }}
                />
              </td>
              <td>{(item.price * item.quantity).toLocaleString()} đ</td>
              <td>
                <button onClick={() => dispatch(removeItem(item.id))}>Xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 style={{ marginTop: '30px' }}>
        Tổng số lượng: {totalQuantity} | Tổng tiền: {totalPrice.toLocaleString()} đ
      </h3>
    </div>
  );
}

export default CartApp;
