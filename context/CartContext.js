import React, { createContext } from 'react';

export const CartContext = createContext([[], function() {}]);

export const { Provider, Consumer } = CartContext;
