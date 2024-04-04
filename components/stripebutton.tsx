import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useCart } from '../context/CartContext'; // Make sure this import matches your file structure

// Initialize Stripe with your publishable key. Make sure the key is in your environment variables
const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY!);

const CheckoutButton: React.FC = () => {
    const { cartItems } = useCart(); // Assuming useCart hook correctly fetches cart items

    const handleCheckout = async () => {
        // Check if the cart is empty
        if (!cartItems || cartItems.length === 0) {
            console.log("Cart is empty");
            return; // Stop execution if the cart is empty
        }

        // Calculate the total amount to check if it meets the minimum required amount
        const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        if (totalAmount < 10) {
            console.log("Total amount must be at least $10.00. Current total: $" + totalAmount);
            return; // Stop execution if totalAmount is less than the required minimum
        }

        try {
            // Create a checkout session
            const response = await fetch('https://nunbutfamily.vercel.app/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ items: cartItems }),
            });

            if (!response.ok) {
                throw new Error('Failed to create Stripe session');
            }

            const data = await response.json();
            const stripe = await stripePromise;
            if (!stripe) {
                throw new Error("Stripe couldn't be initialized.");
            }

            // Redirect to Stripe Checkout
            const { error } = await stripe.redirectToCheckout({
                sessionId: data.sessionId,
                
            });
            if (error) {
                console.error(error.message);
            }
        } catch (error) {
            console.error(error instanceof Error ? error.message : 'An error occurred');
        }
    };

    // Return a button that, when clicked, invokes the handleCheckout function
    return (
        <button
        type='button'
        onClick={handleCheckout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-150 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Proceed to Checkout
      </button>
      
    );
};

export default CheckoutButton;

