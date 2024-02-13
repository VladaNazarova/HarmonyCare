const orderRouter = require('express').Router();
const { Order, User } = require('../../db/models');

orderRouter.post('/', async (req, res) => {
  const { email, login } = req.session;
console.log('МЫ В РУЧКЕ!!!');
console.log(req.session);
console.log(req.body, 'Бадя');
console.log(email, login, 'email, login, ');
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

module.exports = orderRouter;

// const orderRouter = require('express').Router();
// const { Order, User } = require('../../db/models');

// orderRouter.post('/', async (req, res) => {
//   const { email } = req.session;

//   try {
//     const user = await User.findOne({ where: { email } });
//     const { date, time } = req.body;
//     const newOrder = await Order.create({
//       user_id: user.id,

//       date,
//       time
//     });
//     console.log(newOrder);
//     res.status(201).json(newOrder);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Ошибка при создании заказа.');
//   }
// });

// module.exports = orderRouter;
