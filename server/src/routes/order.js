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
      time
    });
    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ошибка при создании заказа.');
  }
});

orderRouter.put('/:clientsaccount', async (req, res) => {
  const { clientsaccount } = req.params;
  console.log('попали в ручку');
  console.log(req.params, 'ПАРАМС');
  const { status } = req.body;
  console.log(req.body, 'БОДИ');
  try {
    const order = await Order.findByPk(clientsaccount);
    console.log(order, 'ОРДЕР');
    if (order) {
      order.status = status;
      await order.save();
      res.json(order);
    } else {
      res.status(404).send('Заказ не найден');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Ошибка при обновлении статуса заказа.');
  }
});

orderRouter.get('/', async (req, res) => {
  try {
    const { email } = req.session;
    const user = await User.findOne({ where: { email } });
    const orders = await Order.findAll({
      where: { user_id: user.id },
      include: [
        {
          model: User,
          as: 'Doctor',
          attributes: ['login']
        }
      ]
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = orderRouter;
