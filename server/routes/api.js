const express = require('express');
const myController = require('../controllers/controller.js');
const router = express.Router();

router.get('/', myController.getAll, (req, res) => {
  console.log('you are in api/');
  res.status(200).send(res.locals.all);
});
router.post(
  '/',
  (req, res, next) => {
    console.log('DATA RECEIVED BY SERVER: ', req.body);
    return next();
  },
  myController.addSlot,
  (req, res) => {
    console.log('API ROUTER:', res.locals);
    res.status(200).json(req.body);
  }
);
module.exports = router;
