const { Pool } = require('pg');

const PG_URI =
  'postgresql://postgres:Ptri14kobe@104.155.217.212:5432/tutorslot-db';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
