// Code to manage the cart state and provide it to the components that need it. context/CartContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type CartItem = {
  selectedSize: string;
  selectedColor: string;
  quantity: number;
  imageUrls: string;
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  sizes: string[];
  colors: string[];
};

type CartContextProps = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  decrementQuantity: (id: number) => void;
  removeFromCart: (id: number, selectedSize: string, selectedColor: string) => void;
  updateQuantity: (id: number, quantity: number) => void;
  calculateTotal: () => number;
  updateCartItemQuantity: (itemId: number, newQuantity: number) => void;
};

const CartContext = createContext<CartContextProps | undefined>(undefined);


export const CartProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Populate initial state from localStorage when component mounts
  useEffect(() => {
    const localData = localStorage.getItem('cartItems');
    if (localData) {
      setCartItems(JSON.parse(localData));
    }
  }, []);

  // Update localStorage when cartItems changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);





  const addToCart = (newItem: CartItem) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => 
        item.id === newItem.id && 
        item.selectedSize === newItem.selectedSize && 
        item.selectedColor === newItem.selectedColor
      );

      if (existingIndex !== -1) {
        // Update quantity for existing item
        const updatedItems = prevItems.map((item, index) => 
          index === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
        return updatedItems;
      } else {
        // Add new item to the cart
        return [...prevItems, newItem];
      }
  });
};

  
  

  const decrementQuantity = (id: number) => {
    setCartItems(prevItems => prevItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        console.log(item);
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    }));
  };

  const removeFromCart = (id: number, selectedSize: string, selectedColor: string) => {
    setCartItems(prevItems => prevItems.filter(item => 
      !(item.id === id && item.selectedSize === selectedSize && item.selectedColor === selectedColor)
    ));
  };
  
  

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.some(item => item.id === id);
      if (itemExists) {
        // Update existing item's quantity
        return prevItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: Math.max(0, quantity) }; // Ensure non-negative quantity
          }
          return item;
        }).filter(item => item.quantity > 0); // Filter out items with 0 quantity
      } else {
        // Add new item logic here with all necessary properties
        const newItem: CartItem = {
          id,
          quantity,
          selectedSize: 'defaultSize', // Provide default or actual value
          selectedColor: 'defaultColor', // Provide default or actual value
          imageUrls: 'defaultImageUrl', // Provide default or actual value
          name: 'defaultName', // Provide default or actual value
          description: 'defaultDescription', // Provide default or actual value
          price: 0, // Provide default or actual value
          category: 'defaultCategory', // Provide default or actual value
          sizes: ['defaultSize'], // Provide default or actual value
          colors: ['defaultColor'], // Provide default or actual value
        };
        return [...prevItems, newItem];
      }
    });
  };
  
  
  const updateCartItemQuantity = (itemId: number, newQuantity: number) => {
    setCartItems(cartItems =>
      cartItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0); // Start accumulating from 0
  };


  return (
    <CartContext.Provider value={{ cartItems, addToCart, decrementQuantity,removeFromCart,updateQuantity, calculateTotal, updateCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  console.log(context);
  return context;
};
