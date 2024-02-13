const orderRouter = require('express').Router();
const { Order } = require('../../db/models');

orderRouter.post('/', async (req, res) => {
  try {
    const { order_name, service_type, user_id, date, time } = req.body;
    const newOrder = await Order.create({
      order_name,
      service_type,
      user_id,
      date,
      time
    });

    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ошибка при создании заказа.');
  }
});

module.exports = orderRouter;
