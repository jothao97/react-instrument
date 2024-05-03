import React from "react";
import InstrumentItems from "./InstrumentItem";

const InstrumentList = ({InstrumentItems, addToCart, removeFromCart, toggleFavorite}) => {
    return(
        <div>
            {InstrumentItems.map(items => (
                <InstrumentItems key={items.id} item= {items} addToCart={addToCart} removeFromCart={removeFromCart} toggleFavorite={toggleFavorite}/>
            ))}
        </div>
    )
}

export default InstrumentList;