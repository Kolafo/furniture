import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import { CartProvider } from './Components/CartStatus';
import FurnitureCarousel from './Components/FurnitureCarousel';
import FurnitureList from './Components/FurnitureList';
import './styles/info.css';


const App = () => {
  const [tab, setTab] = useState();
  if (tab === undefined) {
    setTab('products')
  }
  return (
    <CartProvider>
      <Router>
        <Header settab={setTab} />
        <Routes>
          <Route path="/" element={<FurnitureCarousel />} />
          <Route path="/FurnitureList" element={<FurnitureList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>)
}

export default App;