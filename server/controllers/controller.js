const db = require('../database/dataModels.js');

const myController = {};

myController.getAll = (req, res, next) => {
  const query = 'SELECT * FROM tutorslot_table';

  console.log(query);
  db.query(query, (err, result) => {
    // console.log('🚀 ~ db.query ~ result:', result);
    if (err) {
      console.error('Error executing select all', err);
      return next(err);
    }

    res.locals.all = result.rows;
    // console.log('res.locals.all', res.locals.all);
    res.json({ allData: res.locals.all });
    // next();
  });
};

myController.addSlot = async (req, res, next) => {
  // console.log('FORMDATA==', FormData);
  // console.log('IN myController.addSlot:REQ.BODY==', req.body);
  console.log('IN myController.addSlot:RES.BODY==', res.body);
  // const query = 'INSERT INTO tutorslot_table (tutor_name, available_date , available_time)
  // VALUES ('Tutor C','2024-04-06','19:00');
  // ';
  try {
    const { tutor_name, available_date, available_time } = req.body;

    console.log(
      'WE ARE HERE Controller/row 35',
      tutor_name,
      available_date,
      available_time
    );

    const tutorAddSlot = `INSERT INTO tutorslot_table (tutor_name, available_date , available_time)
  VALUES ($1,$2,$3)
  RETURNING *;
  `;
    // insert to table

    await db.query(tutorAddSlot, [tutor_name, available_date, available_time]);
    // next();
  } catch (error) {
    console.error('Error in :myController.addSlot', error);
    return next(error);
  }
};

myController.booking = async (req, res, next) => {
  try {
    const { student_name, booked, _id } = req.body;
    const bookSlot = `UPDATE tutorslot_table 
    SET booked = true, student_name = $1
    WHERE _id = $2
  RETURNING *;`;
    await db.query(bookSlot, [student_name, _id]);
    console.log(db.query);
    next();
  } catch (error) {
    console.error('Error in :myController.booking', error);
    return next(error);
  }
};
module.exports = myController;
