const serviceRouter = require('express').Router();
const { Service } = require('../../db/models');

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
    const serviceId = await Service.findByPk(req.params.id);
    if (serviceId) {
      res.json(serviceId);
    } else {
      res.status(404).json({ message: 'Service not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = serviceRouter;
