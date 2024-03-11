import React from 'react'
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
            <li className='nav-items'> <Link to="/jahon-yangiliklari">Jahon yangiliklari</Link></li>
            <li className='nav-items'><Link to="/sport-yangiliklari"> Sport yangiliklari</Link></li>
            <li className='nav-items'><Link to="/ob-havo-malumotlari"> Ob-havo ma’lumotlari</Link></li>
        </ul>
        </div>
    </div>
  );
}

export default Header;
