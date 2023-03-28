import { useState } from 'react';
import { Body } from '../Components/Body/Body';
import { Header } from '../Components/Header/Header';
import { Sidebar } from '../Components/Sidebar/Sidebar';

export function Home() {
  const [carts, setCarts] = useState([]);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [quantityItems, setQuantityItems] = useState(0);

  function productAddCart(cart) {
    let quantity = 1;
    let exist = false;
    carts.forEach((e) => {
      if (e.cart === cart) {
        e.quantity++;
        exist = true;
        return;
      }
    });
    if (!exist) {
      setCarts([{ cart: cart, quantity: quantity }, ...carts]);
    }

      setQuantityItems(quantityItems + 1);

  }

  function clearCart() {
    setCarts([]);
  }

  function sidebar() {
    setOpenSidebar(!openSidebar);
  }
  return (
    <>
      {openSidebar ? (
        <Sidebar closeSidebar={sidebar} products={carts} dropCart={clearCart} />
      ) : (
        false
      )}
      <Header openSidebar={sidebar} quantityProducts={quantityItems} />
      <Body addProductCart={productAddCart} />
    </>
  );
}
