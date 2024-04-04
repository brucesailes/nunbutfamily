// pages/_app.tsx
import type { AppProps } from 'next/app';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CartProvider } from '../context/CartContext'; // Adjust path as needed
import '../style/globals.css';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Elements stripe={stripePromise}>
        <Component {...pageProps} />
      </Elements>
    </CartProvider>
  );
}

export default MyApp;


