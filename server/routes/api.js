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
<<<<<<< HEAD
    // console.log('DATA RECEIVED BY SERVER: ', req.body);
    // return next();
=======
    console.log('DATA RECEIVED BY SERVER: ', req.body);
    return next();
>>>>>>> parent of e819e77 ( add booking button function, but not sure if work)
    return next();
  },
  myController.addSlot,
  (req, res) => {
    // console.log('API ROUTER:', res.locals);
    res.status(200).json(req.body);
  }
);
<<<<<<< HEAD

router.post(
  '/booking',
  (req, res, next) => {
    console.log('BOOKING DATA RECEIVED BY SERVER: ', req.body);
    return next();
  },
  myController.booking,
  (req, res) => {
    // console.log('API ROUTER:', res.locals);
    res.status(200).json(req.body);
  }
);
=======
>>>>>>> parent of e819e77 ( add booking button function, but not sure if work)
module.exports = router;
