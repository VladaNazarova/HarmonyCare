const router = require('express').Router();
const { User } = require('../../db/models');
const { PatientCard } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const user = await User.findByPk(1);
    const patient = await PatientCard.findAll({ raw: true });
    res.json({ user, patient });
  } catch (error) {
    console.log(error);
  }
});

router.post('/', async (req, res) => {
  console.log('это боди ----', req.body);
  try {
    // const user_id = req.session.user_id;
    const patientData = { user_id: 1, ...req.body };
    const patient = await PatientCard.create(patientData);
    res.json(patient);
  } catch (err) {
    console.log(err);
    res.status(401).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await PatientCard.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (err) {
    res.status(401).json(err);
  }
});

module.exports = router;
