import React, { createContext, useState, useContext, ReactNode } from "react";
import { Movie } from "../types/movie";

export interface CartItem extends Movie {
  quantity: number;
  dateAdded: string;
}

interface CartContextData {
  cartItems: CartItem[];
  addToCart: (movie: Movie) => void;
  removeFromCart: (movieId: number) => void;
  updateItemQuantity: (movieId: number, newQuantity: number) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const addToCart = (movie: Movie) => {
    setCartItems((prevItems) => {
      const itemInCart = prevItems.find((item) => item.id === movie.id);
      if (itemInCart) {
        return prevItems.map((item) =>
          item.id === movie.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        const now = new Date();
        const dateAdded = `${now.toLocaleDateString(
          "pt-BR"
        )} às ${now.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        })}`;
        return [...prevItems, { ...movie, quantity: 1, dateAdded }];
      }
    });
  };

  const removeFromCart = (movieId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== movieId)
    );
  };

  const updateItemQuantity = (movieId: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === movieId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateItemQuantity,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
