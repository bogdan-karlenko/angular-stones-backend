const express = require('express');
const app = express();

const SERVER_PORT = 3200;

app.get('/', function (req, res) {
  res.send('Hello World!'); 
});

app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port ${SERVER_PORT}!`)
});

