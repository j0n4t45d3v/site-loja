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
      const requests = products.map(async (e) => {
        const item = await api.get(`${url}/${e.cart}`);
        const order = { item : item, quantity: e.quantity }
        return order;
      });
      const responses = await Promise.all(requests);
      const data = responses.map((res) => {
        const order = { item: res.item.data, quantity: res.quantity };
        return order;
      });
      setCart(data);
    })();
  }, [products]);

  if (!cart || cart.length === 0) {
    return null; 
  }

  let sum = 0;

  
  return (
    <div className="sidebar">
      <button className="close" onClick={close}>
        x
      </button>
      <div className="main-container">
        <div className="products-cart">
        {cart.map((e) => {
    if (e !== undefined) {
      sum += e.item?.price;
      return [
        <div className="produt">
          <img className="img" src={e.item?.thumbnail} alt="" />
          <p>{e.item?.title}</p>
          <p>+{e.quantity}-</p>
        </div>
      ];
    }
    return [];
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
