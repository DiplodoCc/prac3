// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalog from './pages/catalog';
import Cart from './pages/cart';
import Header from './components/header';
import './App.css'; // Подключаем стили

const booksData = [
  { id: 1, title: '1984', author: 'Джордж Оруэлл', price: 500 },
  { id: 2, title: 'Мастер и Маргарита', author: 'Михаил Булгаков', price: 600 },
  { id: 3, title: 'Гарри Поттер', author: 'Дж.К. Роулинг', price: 800 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    const existingBook = cart.find(item => item.id === book.id);
    if (existingBook) {
      setCart(cart.map(item => item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  };

  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header cartCount={totalItemsInCart} />
        <main className="content">
          <Routes>
            <Route path="/" element={<Catalog books={booksData} onAddToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cartItems={cart} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;