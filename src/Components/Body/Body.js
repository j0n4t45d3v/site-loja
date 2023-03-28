import { useEffect, useState } from 'react';
import api, { url } from '../../service/api';
import './body.css';

export function Body({ addProductCart,  productInfo}) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    api.get(url).then((res) => setProduct(res.data.products));
  },[]);

  function addCart(id) {
    // sessionStorage.setItem("cart", id)
    addProductCart(id);
  }

  function openProduct(product){
    productInfo(product)
  }

  return (
    <div className="container-body">
      {product.map((e) => {
        const thumb = e.thumbnail
        const name= e.title
        const descrip = e.description
        const price = e.price

        const product = {thumb, name, descrip, price}
        return (
          <div className="product" /* onClick={() => openProduct(product) }*/>
            <img className="thumbnail" src={e.thumbnail} alt="" />
            <h4 className="title-product">{e.title}</h4>
            <p className="description">{e.description}</p>
            <p className="price-item">R$ {e.price.toFixed(2)}</p>
            <button className="add-cart" onClick={() => {addCart(e.id)}}>
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
