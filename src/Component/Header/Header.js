import logo from '../../asset/logo-louja.png';
import cart from '../../asset/cart.png';
import './header.css';

export function Header() {
  function handlecart(){
    return(
      <article className='menu-cart'>
          
      </article>
    )
  }
  return (
    <header className="container-principal">
      <img className="logo-img" src={logo} alt="logo-site-loja" />

      <input className='input-search' type="text" />

      <img className='cart-icon' onClick={handlecart} src={cart} alt="" />
    </header>
  );
}
