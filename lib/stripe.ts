import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_API_KEY;

if (!stripeSecretKey) {
    throw new Error("STRIPE_API_KEY not found");
}

const stripe = new Stripe(stripeSecretKey);

export default stripe;
