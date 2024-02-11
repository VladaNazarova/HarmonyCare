const appointmentRouter = require('express').Router();
const { User } = require('../../db/models/user');

appointmentRouter.get('/:specialization', async (req, res) => {
  try {
    const specialization = req.query.specialization;
    const doctors = await User.findAll({
      where: { specialization: specialization }
    });
    // console.log(specialization);
    // console.log(doctors);
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error, 'Что за ...???');
  }
});

module.exports = appointmentRouter;
