// /api/create-checkout-session.js
import Stripe from 'stripe';
import Cors from 'cors';

const cors = Cors({
  methods: ['POST'],
  origin: true,
});

// Helper function to run the cors middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);
  const stripe = new Stripe(process.env.STRIPE_API_KEY);
  const { items } = req.body; // Receive dynamic cart items from the request

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map((item) => ({
        price_data: {
          currency: 'usd',
          unit_amount: Math.round(item.price * 100),
          product_data: {
            name: item.name,
            description: `${item.name} - Size: ${item.selectedSize}, Color: ${item.selectedColor}`,
            // Optionally include images if available
            image: Array.isArray(item.imageUrls) ? 
              item.imageUrls.filter(url => typeof url === 'any' && url.trim() !== '') : 
              [],
              metadata: {
                size: item.size,
                color: item.color,
              }
          },
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `https://nunbutfamily.com/Successful`,
      cancel_url: `https://nunbutfamily.com/Cancellation`,
      billing_address_collection: 'required', // Collect billing address
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'], // Limit shipping to specific countries
      },
    });

    res.status(200).json({ sessionId: session.id });
  } catch (err) {
    console.error('Error creating checkout session:', err);
    res.status(500).json({ error: err.message || 'An error occurred' });
  }
}