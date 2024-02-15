const router = require('express').Router();
require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_KEY);
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
  res.send('worksss');
});

router.post('/', (req, res) => {
  const { product, token } = req.body;
  console.log('🚀 ~ router.post ~ token:', token);
  console.log('🚀 ~ router.post ~ product:', product);
  const idempotencyKey = uuidv4();

  return stripe.customers
    .create({
      email: token.email,
      source: token.id
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: product.price * 100,
          currency: 'gbp',
          customer: customer.id,
          receipt_email: token.email,
          description: product.name
        },
        { idempotencyKey }
      );
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

module.exports = router;
