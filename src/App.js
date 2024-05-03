import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Routes, Router, Route, Link} from 'react-router-dom';
import {useState} from 'react'
import InstrumentList from './components/InstrumentList';


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
}

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/guitar'>Guitars</Link>
          <Link to='/keyboard'>Keyboards</Link>
          <Link to='/drum'>Drums</Link>
        </nav>
        <Routes>
          <Route path= "/" element = {<InstrumentList instrumentItems={instrumentItems} addToCart={addToCart} removeFromCart={removeFromCart} toggleFavorite={toggleFavortie}/> }/>
          <Route path= "/" element = {<InstrumentList instrumentItems={instrumentItems.filter(items.category === 'guitar')} addToCart={addToCart} removeFromCart={removeFromCart} toggleFavorite={toggleFavortie}/> }/>
          <Route path= "/" element = {<InstrumentList instrumentItems={instrumentItems.filter(items.category === 'keyboard')} addToCart={addToCart} removeFromCart={removeFromCart} toggleFavorite={toggleFavortie}/> }/>
          <Route path= "/" element = {<InstrumentList instrumentItems={instrumentItems.filter(items.category === 'drum')} addToCart={addToCart} removeFromCart={removeFromCart} toggleFavorite={toggleFavortie}/> }/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
