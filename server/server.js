const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const mainPage = path.resolve(__dirname, '..', './client/index.html');
app.use(express.json());

// app.use(express.static(path.resolve(__dirname, '..', 'client')));
app.use(express.static('client'));

app.get('/', (req, res) => {
  res.sendFile(mainPage);
});

app.listen(port, () => {
  console.log(mainPage);
  console.log('I am listening to 3000');
});
//TODO:
// create field on frontend
// send message from client/field using dom manipulation
// response from server to client
// store the field data
