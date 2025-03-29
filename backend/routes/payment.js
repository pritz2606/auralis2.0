const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET);

// Ensure the Stripe secret key is properly loaded
if (!process.env.STRIPE_SECRET) {
  console.error("Stripe secret key is missing! Add it to the .env file.");
  process.exit(1);
}

router.post("/create-checkout-session", async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || typeof amount !== "number") {
      return res.status(400).json({ error: "Invalid amount provided" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: "http://localhost:5173/payment-success",
      cancel_url: "http://localhost:5173/payment-failed",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: { name: "AURALIS Subscription" },
            unit_amount: amount, // Amount in paisa (₹199 = 19900)
          },
          quantity: 1,
        },
      ],
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
