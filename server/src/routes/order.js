const orderRouter = require('express').Router();
const { Order, User, Service } = require('../../db/models');

orderRouter.post('/:specialization', async (req, res) => {
  const { specialization } = req.params;
  const { email } = req.session;
  try {
    const user = await User.findOne({ where: { email }, raw: true });
    const serv = await Service.findOne({ where: { name: specialization }, raw: true });
    
    const { doctor_id, date, time } = req.body;
    const newOrder = await Order.create({
      user_id: user.id,
      doctor_id,
      service_id: serv.id,
      service_type: specialization,
      date,
      time,
      // status: 
    });
    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ошибка при создании заказа.');
  }
});
orderRouter.get('/', async (req, res) => {
  try {
    const orders = await Order.findAll();

    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = orderRouter;
