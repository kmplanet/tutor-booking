// const express = require('express');
const express = require('express');
const { request } = require('http');
const app = express();
const port = 3000;
const path = require('path');
const apiRouter = require('./routes/api.js');
const myController = require('./controllers/controller.js');
// const mainPage = path.resolve(__dirname, '..', './client/index.html');
// const mainPage = path.resolve(__dirname, '..', './client/index.html');
app.use('/build', express.static(path.join(__dirname, '../build/bundle.js')));
app.use(express.json());

// app.use(express.static(path.resolve(__dirname, '..', 'client')));
app.use(express.static('client'));

app.get('/', (req, res) => {
  res.sendFile(express.static(path.join(__dirname, '../build/bundle.js')));
});
// app.use('/api', apiRouter);

app.get('/api', (req, res) => {
  return res.status(200).send('hihihihi');
});
app.listen(port, () => {
  // console.log(mainPage);
  console.log(`I am listening to ${port}`);
});
//TODO:
// create field on frontend
// send message from client/field using dom manipulation
// response from server to client
// store the field data
//NOTE:
//Q?:
//FIXME:
