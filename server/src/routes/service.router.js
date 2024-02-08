const serviceRouter = require('express').Router();

const { Service, User } = require('../../db/models');

serviceRouter.get('/', async (req, res) => {
  try {
    const services = await Service.findAll();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
serviceRouter.get('/:id', async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id, {
      include: [{ model: User, as: 'specialization' }]
    });
    if (service) {
      res.json(service);
    } else {
      res.status(404).json({ message: 'Service not found' });
    }
  } catch (error) {
    console.log('QQQ');
    res.status(500).json({ error: error.message,  });
  }
});



module.exports = serviceRouter;
