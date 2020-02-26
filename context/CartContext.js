import React, { createContext, useState } from 'react';

export const CartContext = createContext([[], function() {}]);

export const CartProvider = props => {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    );
};
