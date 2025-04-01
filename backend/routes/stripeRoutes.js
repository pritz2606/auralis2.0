import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();
const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create Payment Intent
router.post("/create-checkout-session", async (req, res) => {
  const { userId, plan } = req.body;

  const price = plan === "basic" ? 19900 : plan === "premium" ? 49900 : 0;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [{ price_data: { currency: "inr", product_data: { name: "Auralis Subscription" }, unit_amount: price }, quantity: 1 }],
    success_url: `http://localhost:5173/success?userId=${userId}&plan=${plan}`,
    cancel_url: "http://localhost:5173/",
  });

  res.json({ url: session.url });
});

// Handle Payment Success
router.post("/payment-success", async (req, res) => {
  const { userId, plan } = req.body;

  try {
    await User.findByIdAndUpdate(userId, { subscription: true, plan });
    res.json({ message: "Subscription activated" });
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
});

export default router;
