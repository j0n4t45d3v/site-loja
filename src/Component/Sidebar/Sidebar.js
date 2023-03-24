import React, { useState } from 'react';
import './sidebar.css';

export function Sidebar({ closeSidebar }) {
  const [cart, setCart] = useState([{}]);

  function close() {
    closeSidebar();
  }
  return (
    <div className="sidebar">
      <button className="close" onClick={close}>
        x
      </button>
      <div className='main-container'>

      <div className="products-cart">
        {cart.map((e) => {
          return (
            <>
              <p>toiert</p>
              <p>toiert</p>
              <p>toiert</p>
              <p>toiert</p>
              <p>toiert</p>
            </>
          );
        })}
      </div>
      <div className='final-cart'>
        <p>Total: </p>
        <button>Comprar</button>
      </div>
      </div>
    </div>
  );
}
