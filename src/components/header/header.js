import './header.css';
import  logo from './images/arrows-triangle.svg'
import { Link } from 'react-router-dom';

function Header() {
  return (
      <div className='container'>
    <div className="header">

        <div className='logo-item'>
            <img src={logo} alt="logo"/>
        </div>
        <ul className='second-nav'>
            <li className='nav-items'> <Link to="/">Bosh sahifa</Link></li>
            <li className='nav-items'> Jahon yangiliklari</li>
            <li className='nav-items'> Sport yangiliklari</li>
            <li className='nav-items'> Ob-havo ma’lumotlari</li>
        </ul>



        </div>
    </div>
  );
}

export default Header;
