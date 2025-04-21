import React from 'react';
import Login from './components/Login';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <Login />
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
