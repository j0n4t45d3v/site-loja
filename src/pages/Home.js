import { useState } from 'react';
import { Body } from '../Component/Body/Body';
import { Header } from '../Component/Header/Header';
import { Sidebar } from '../Component/Sidebar/Sidebar';

export function Home() {
  const [carts, setCarts] = useState([]);
  const [openSidebar, setOpenSidebar] = useState(false);

  function productAddCart(cart) {
    let quantity = 1;
    carts.forEach((e) => {
      if (e.cart === cart) {
        e.quantity++;
        return;
      }
    });
      setCarts([{ cart: cart, quantity: quantity }, ...carts]);

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
