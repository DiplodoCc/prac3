// src/pages/Catalog.jsx
import React from 'react';

export default function Catalog({ books, onAddToCart }) {
  return (
    <div>
      <h1>Каталог книг</h1>
      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p className="author">Автор: {book.author}</p>
            <p className="price">Цена: {book.price} руб.</p>
            <button className="add-button" onClick={() => onAddToCart(book)}>
              Добавить в корзину
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}