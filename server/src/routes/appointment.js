const appointmentRouter = require('express').Router();
const { User } = require('../../db/models');

appointmentRouter.get('/:specialization', async (req, res) => {
  try {
    const { specialization } = req.params;
    const doctors = await User.findAll({
      where: { specialization }
    });
    console.log(specialization);
    console.log(doctors);
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error, 'Что за ...???');
  }
});

module.exports = appointmentRouter;
