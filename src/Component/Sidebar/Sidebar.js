import React, { useEffect, useState } from 'react';
import api, { url } from '../../service/api';
import './sidebar.css';

export function Sidebar({ closeSidebar, products }) {
  const [cart, setCart] = useState([{}]);
  function close() {
    closeSidebar();
  }

  useEffect(() => {
    (async () => {
      const requests = products.map((e) => api.get(`${url}/${e}`));
      const responses = await Promise.all(requests);
      const data = responses.map((res) => res.data);
      setCart(data);
    })();
  }, [products]);

  let sum = 0;

  return (
    <div className="sidebar">
      <button className="close" onClick={close}>
        x
      </button>
      <div className="main-container">
        <div className="products-cart">
          {cart.map((e) => {
            sum += e.price;
            return (
              <div className="produt">
                <img className="img" src={e.thumbnail} alt="" />
                <p>{e.title}</p>
              </div>
            );
          })}
        </div>
        <div className="final-cart">
          <p>Total: {sum.toFixed(2)}</p>
          <button>Comprar</button>
        </div>
      </div>
    </div>
  );
}
