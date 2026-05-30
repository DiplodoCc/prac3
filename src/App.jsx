// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalog from './pages/catalog';

const booksData = [
  { id: 1, title: '1984', author: 'Джордж Оруэлл', price: 500 },
  { id: 2, title: 'Мастер и Маргарита', author: 'Михаил Булгаков', price: 600 },
  { id: 3, title: 'Гарри Поттер', author: 'Дж.К. Роулинг', price: 800 },
];

function App() {
  const [cart, setCart] = useState([]); // Стейт корзины

  const addToCart = (book) => {
    const existingBook = cart.find(item => item.id === book.id);
    if (existingBook) {
      setCart(cart.map(item => 
        item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Catalog books={booksData} onAddToCart={addToCart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;