import React from "react";

const InstrumentItems = ({items, addToCart, removeFromCart, toggleFavorite}) => {
    return(
        <div>
            <h3>{items.name}</h3>
            <p>Instrument category: {items.category}</p>
            <button onClick={() => addToCart(items)}>Add to Cart</button>
            <button onClick={() => removeFromCart(items)}>Remove from Favorite</button>
            <button onClick={() => toggleFavorite(items)}>{items.isFavorite ? 'unfavorite' : 'favorite'}</button>
        </div>
    )
}