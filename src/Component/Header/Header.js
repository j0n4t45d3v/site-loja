import logo from '../../asset/logo-louja.png';
import cart from '../../asset/cart.png';
import './header.css';

export function Header({openSidebar}) {

  function open(){
    openSidebar();
  }

  return (
    <header className="container-principal">
      <img className="logo-img" src={logo} alt="logo-site-loja" />

      <input placeholder='Buscar' className='input-search' type="text" />

      <img className='cart-icon' onClick={open} src={cart} alt="" />
    </header>
  );
}