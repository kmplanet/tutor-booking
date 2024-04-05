const express = require('express');
const myController = require('../controllers/controller.js');
const router = express.Router();

router.get('/', myController.getAll, (req, res) => {
  console.log('you are in api/');
  res.status(200).send(res.locals.all);
});

router.get('/allslots', myController.getAll, (req, res) => {
  res.status(202).json(res.locals.all);
});
module.exports = router;
