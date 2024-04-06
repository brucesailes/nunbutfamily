import React from 'react';
import Image from 'next/image';
import { useCart } from '../../context/CartContext';
import CheckoutButton from '../../components/stripebutton';
import BackButton from '../../components/back-button';

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, decrementQuantity } = useCart();

  // Calculate total
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="text-black max-w-4xl mx-auto mb-40 p-20 shadow-xl rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-gray-100">Shopping Cart</h1>
      <div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row justify-between items-center mb-4 bg-white p-4 rounded-lg">
              {item.imageUrls && (
                <Image src={item.imageUrls} alt={`${item.name} - ${item.selectedColor}`} width={100} height={100} layout="intrinsic" className="rounded-md" />
              )}
              <div className="flex-1 ml-4">
                <span className="font-semibold">{item.name}</span>
                <div className="text-sm">Size: {item.selectedSize}</div>
                <div className="text-sm">Color: {item.selectedColor}</div>
              </div>
              <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
              <div className="flex items-center">
                <button onClick={() => decrementQuantity(item.id)} className="px-2 py-1 text-lg bg-gray-600 hover:bg-gray-500 text-white rounded-md">-</button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => addToCart({ ...item, quantity: 1 })} className="px-2 py-1 text-lg bg-gray-600 hover:bg-gray-500 text-white rounded-md">+</button>
              </div>
              <button 
              type="button"
              onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}>
                  Remove
              </button>

            </div>
          ))
        ) : (
          <p className="text-gray-400">Your cart is empty.</p>
        )}
      </div>
      <div className="text-right font-bold text-gray-100">Total: ${total}</div>
      <div className="mt-4">
        <CheckoutButton />
      </div>
      <div className="mt-4">
        <BackButton /> 
      </div>
    </div>
  );
};

export default CartPage;





