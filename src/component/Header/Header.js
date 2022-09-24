import React from 'react';
import logo from '../../image/header_log.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
       <img src={logo} alt="" />
       <nav>
         <a href="/shop">Shop</a>
         <a href="/review">Order review</a>
         <a href="/manage">Manage Inventory</a>
         <a href="/contact">Contact Us</a>
      </nav>
        </div>
    );
};

export default Header;
