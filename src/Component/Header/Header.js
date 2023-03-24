import cart from '../../asset/cart.png';
import logo from '../../asset/logo-louja.png';
import './header.css';

export function Header({ openSidebar, quantityProducts }) {
  function open() {
    openSidebar();
  }

  return (
    <header className="container-principal">
      <img className="logo-img" src={logo} alt="logo-site-loja" />

      <input placeholder="Buscar" className="input-search" type="text" />

      <span className="cart">
        <p className='quantity-items'>{quantityProducts}</p>
        <img className="cart-icon" onClick={open} src={cart} alt="" />
      </span>
    </header>
  );
}
