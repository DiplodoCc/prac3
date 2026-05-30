// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalog from './pages/catalog';

const booksData = [
  { id: 1, title: '1984', author: 'Джордж Оруэлл', price: 500 },
  { id: 2, title: 'Мастер и Маргарита', author: 'Михаил Булгаков', price: 600 },
  { id: 3, title: 'Гарри Поттер', author: 'Дж.К. Роулинг', price: 800 },
];

function App() {
  const addToCart = (book) => console.log('Добавлено:', book);

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