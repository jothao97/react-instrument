import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Routes, Router, Route, Link} from 'react-router-dom';
import {useState} from 'react'

const App= () => {

  const [instrumentItems, setInstrumentItems] = useState([
    { "id": 1, "category": "Guitar", "name": "Fender Stratocaster" },
    { "id": 2, "category": "Keyboard", "name": "Yamaha P-125" },
    { "id": 3, "category": "Drum", "name": "DW Collector's Series" }
  ])

  const [cart, setCart] = useState([]);

  const [message, setMessage] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setMessage(`Added ${item.name} ${item.category} to cart`);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter(cartItem => cart.id != item.id));
    setMessage(`Removed ${item.title} from cart`);
  }

  const toggleFavortie = (item) => {
    const updatedItems = instrumentItems.map(instrumentItems => instrumentItems.id === item.id ? {...instrumentItems, isFavorite: ! instrumentItems.isFavorite} : instrumentItems)
  };
  setInstrumentItems(updatedItems);

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to='/'>Home</Link>
          <Link to=''>Guitars</Link>
          <Link to=''>Keyboards</Link>
          <Link to=''>Drums</Link>
        </nav>
      </div>
    </Router>
  );
}

export default App;
