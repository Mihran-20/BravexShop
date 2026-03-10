import React, { createContext, useState, useContext } from "react";

// Cart Context
const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

// CartProvider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prev) => [...prev, item]);
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== itemId));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
