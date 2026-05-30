// src/pages/Cart.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart({ cartItems }) {
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Ваша корзина пуста</h2>
        <Link to="/">Вернуться в каталог</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Корзина</h1>
      <div className="cart-list">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div>
              <h4>{item.title}</h4>
              <p>{item.author}</p>
            </div>
            <div className="cart-item-details">
              <p>{item.price} руб. x {item.quantity} шт.</p>
              <strong>{item.price * item.quantity} руб.</strong>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Итого книг: {totalItems} шт.</h3>
        <h2>Общая сумма: {totalPrice} руб.</h2>
      </div>
    </div>
  );
}