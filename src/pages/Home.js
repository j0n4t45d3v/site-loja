import { useState } from 'react';
import { Body } from '../Component/Body/Body';
import { Header } from '../Component/Header/Header';
import { Sidebar } from '../Component/Sidebar/Sidebar';

export function Home() {
  const [carts, setCarts] = useState([]);
  const [openSidebar, setOpenSidebar] = useState(false);

  function productAddCart(cart) {
    let quantity = 1;
    let exist= false;
    carts.forEach((e) => {
      if (e.cart === cart) {
      
        e.quantity++;
        exist = true
        return;
      }
    });
    if(!exist){
      setCarts([{ cart: cart, quantity: quantity }, ...carts]);
    }

  }

  function sidebar() {
    setOpenSidebar(!openSidebar);
  }
  return (
    <>
      {openSidebar ? (
        <Sidebar closeSidebar={sidebar} products={carts} />
      ) : (
        false
      )}
      <Header openSidebar={sidebar} quantityProducts={carts.length} />
      <Body addProductCart={productAddCart} />
    </>
  );
}
