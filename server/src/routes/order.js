const orderRouter = require('express').Router();
const { Order, User } = require('../../db/models');

orderRouter.post('/', async (req, res) => {
  const { email } = req.session;

  try {
    const user = await User.findOne({ where: { email } });

    const { doctor_id, date, time } = req.body;
    const newOrder = await Order.create({
      user_id: user.id,
      doctor_id,
      date,
      time
    });
    console.log(newOrder, 'newOrder');
    console.log(req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ошибка при создании заказа.');
  }
});

orderRouter.get('/', async (req, res) => {
  try {
    const { email } = req.session;
    console.log(email)
    const user = await User.findOne({ where: { email } });
    const orders = await Order.findAll({ where: { user_id: user.id } });
    console.log(orders, 'ordersSSSSSSSSSSSS');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = orderRouter;
