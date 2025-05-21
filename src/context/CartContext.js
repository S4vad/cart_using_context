import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Initialize state directly from localStorage (if it exists)
  const [cartItem, setCartItem] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage every time it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);

  const addProduct = (product) => {
    setCartItem((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if(exist){
        alert('product is already in the cart!')
        return prev;
      }else{
        return [...prev,product]
      }
    });
  };

  const removeCart = (productId) => {
    setCartItem((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItem([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItem, addProduct, removeCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
