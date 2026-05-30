// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ cartCount }) {
  return (
    <header className="header">
      <h2>Книжный магазин</h2>
      <nav>
        <Link to="/" className="nav-link">Каталог</Link>
        <Link to="/cart" className="nav-link cart-link">
          Корзина <span className="cart-badge">{cartCount}</span>
        </Link>
      </nav>
    </header>
  );
}