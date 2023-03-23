import React, { useEffect, useState } from 'react';
import api, { url } from '../../service/api';

export function Sidebar (){
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(sessionStorage.getItem("cart"))
  },[])

  console.log(products);
  /* return  (
   / <div className="sidebar">
      {products.map( e =>{
      return(
        <div>
          <img src={e.images} alt="" />
        </div>
      )} )}
    </div> 
  )  */
}
