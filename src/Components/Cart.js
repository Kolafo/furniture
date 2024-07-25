import React, { useState } from 'react';
const Cart = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="cart-icon" onClick={toggleCart}>
        🛒
      </button>
      {isOpen && (
        <div className="cart-overlay" onClick={toggleCart}>
          <div className="cart-dropdown" onClick={e => e.stopPropagation()}>
            <div className="cart-header">
              <h3>Your Cart</h3>
              <button className="close-button" onClick={toggleCart}>
                X
              </button>
            </div>
            <ul className="cart-items">
              {/* {items.map(item => (
                <li key={item.id} className="cart-item">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </li>
              ))} */}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;