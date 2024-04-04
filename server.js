const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4242;
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const sig = req.headers['stripe-signature'];

  try {
    const event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntentSucceeded = event.data.object;
        // Handle payment success event
        console.log('Payment Intent Succeeded:', paymentIntentSucceeded);
        break;
      // Handle other event types as needed
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
    // Return a 200 response to acknowledge receipt of the event
    res.status(200).end();
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
