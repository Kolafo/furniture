import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
          <nav className="nav">
            <Link to="/" className="nav-link">Главная</Link>
            <Link to="/products" className="nav-link">Товары</Link>
            <Link to="/contact" className="nav-link">Контакты</Link>
          </nav>
    </header>
  );
};

export default Header;