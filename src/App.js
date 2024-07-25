нimport React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import { CartProvider } from './Components/CartStatus';
import FurnitureCarousel from './Components/FurnitureCarousel';
import FurnitureList from './Components/FurnitureList'

const App = () => {
  const [tab, settab] = useState();
  if (tab === undefined) {
    settab('products')
  }
  return (
    <CartProvider>
      <Router>
        <Header settab={settab} />
        <Routes>
          <Route path="/" element={<FurnitureCarousel />} />
          <Route path="/products" element={<FurnitureList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>)
}

export default App;