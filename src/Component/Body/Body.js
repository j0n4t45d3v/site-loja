import { useEffect, useState } from 'react';
import api, { url } from '../../service/api';
import './body.css';

export function Body() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    api.get(url).then((res) => setProduct(res.data.products));
  }, []);

  function addCart(id) {
    sessionStorage.setItem('cart', id)
  }
  return (
    <div className="container-body">
      {product.map((e) => {
        return (
          <div className="product">
            <img className="thumbnail" src={e.thumbnail} alt="" />
            <h4 className='title-product'>{e.title}</h4>
            <p className='description'>{e.description}</p>
            <button className='add-cart' onClick={addCart(e.id)}>+</button>
          </div>
        );
      })}
    </div>
  );
}
