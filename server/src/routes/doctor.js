const router = require('express').Router();
const { User } = require('../../db/models');
const { PatientCard } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    // console.log("🚀 ~ router.post ~ req.session:", req.session.email);
    const { email } = req.session;
    const user = await User.findOne({ where: { email } });
    // const user = await User.findOne({ where: { email: req.session.email } });
    // console.log("🚀 ~ router.get ~ user:", user)
    const patient = await PatientCard.findAll({ where: { user_id: user.id } });
    // console.log("🚀 ~ router.get ~ patient:", patient)
    res.json({ user, patient });
  } catch (error) {
    console.log(error);
  }
});

router.post('/', async (req, res) => {
  try {
    // console.log("🚀 ~ router.post ~ req.session:", req.session);
    const user = await User.findOne({ where: { email: req.session.email } });
    // console.log(user);
    const patientData = { user_id: user.id, ...req.body };
    const patient = await PatientCard.create(patientData);
    // console.log("🚀 ~ router.post ~ patient:", patient)
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

router.put('/:id', async (req, res) => {
  try {
    const patient = await PatientCard.findByPk(req.params.id);
    const user = await User.findOne({ where: { email: req.session.email } });
    patient.user_id = user.id;
    patient.name = req.body.name;
    patient.last_name = req.body.last_name;
    patient.age = req.body.age;
    patient.health_issues = req.body.health_issues;
    patient.analyses_result = req.body.analyses_result;
    patient.treatment = req.body.treatment;
    patient.save();
    res.json(patient);
  } catch (err) {
    console.log(err);
    res.status(401).json(err);
  }
});

module.exports = router;
