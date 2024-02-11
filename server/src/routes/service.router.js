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

serviceRouter.get('/:name', async (req, res) => {
  try {
    const { name } = req.params;
      const service = await Service.findOne({ where: { name } });
    

    if (service) {
      res.json(service);
    } else {
      res.status(404).json({ message: 'Service not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = serviceRouter;
