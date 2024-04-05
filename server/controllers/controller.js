const db = require('../database/dataModels.js');

const myController = {};

myController.getAll = (req, res, next) => {
  const query = 'SELECT * FROM tutorslot_table';

  console.log(query);
  db.query(query, (err, result) => {
    console.log('🚀 ~ db.query ~ result:', result);
    if (err) {
      console.error('Error executing select all', err);
      return next(err);
    }

    res.locals.all = result.rows;
    console.log('res.locals.all', res.locals.all);
    res.json({ allData: res.locals.all });
    // next();
  });
};

module.exports = myController;
