// pages/_app.tsx
import type { AppProps } from 'next/app';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CartProvider } from '../context/CartContext'; 
import Layout from '../components/layout'; 
import '../style/globals.css';

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY as string);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
    <CartProvider>
      <Elements stripe={stripePromise}>
        <Component {...pageProps} />
      </Elements>
    </CartProvider>
    </Layout>
  );
}

export default MyApp;


