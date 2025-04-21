import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../redux/cartSlice';

function Cart() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <h2>Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng trống.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} style={{ marginBottom: '10px' }}>
            {item.name} - {item.price}k
            <button onClick={() => handleRemove(item.id)} style={{ marginLeft: '10px', color: 'red' }}>
              Xoá
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
