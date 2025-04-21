import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

function ProductList() {
  const products = useSelector(state => state.product.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Sản phẩm</h2>
      {products.map(product => (
        <div key={product.id} style={{ marginBottom: '10px' }}>
          {product.name} - {product.price}k
          <button onClick={() => handleAddToCart(product)} style={{ marginLeft: '10px' }}>
            Thêm vào giỏ
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
