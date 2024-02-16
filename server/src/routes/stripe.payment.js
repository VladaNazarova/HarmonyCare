const router = require('express').Router();
require("dotenv").config()
const { Order, User, Service } = require('../../db/models');

const stripe = require("stripe")(process.env.STRIPE_KEY)

const storeItems = new Map([
  [1, { priceInCents: 10000, name: "Consultation" }],
])

router.post("/", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map(item => {
        const storeItem = storeItems.get(item.id)
        return {
          price_data: {
            currency: "gbp",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        }
      }),
      success_url: `${process.env.CLIENT}/`,
      cancel_url: `${process.env.CLIENT}/clientsaccount`,
    })
    res.json({ url: session.url })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

module.exports = router;